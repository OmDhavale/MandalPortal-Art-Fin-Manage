// API Service for Mandal Portal
// Connects in real-time to Art-Finance-Management API
import { MURTIKARS_DATA } from '../data/murtikarsData';

const DEFAULT_ENDPOINTS = [
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  'http://localhost:5000/api',
  'https://art-finance-management.onrender.com/api'
];

const INQUIRIES_STORAGE_KEY = 'mandal_portal_inquiries';
const API_URL_STORAGE_KEY = 'mandal_portal_api_url';

export const apiService = {
  // Get active API base URL
  getBaseUrl() {
    return localStorage.getItem(API_URL_STORAGE_KEY) || DEFAULT_ENDPOINTS[0];
  },

  setBaseUrl(url) {
    if (url) {
      localStorage.setItem(API_URL_STORAGE_KEY, url.trim().replace(/\/+$/, ''));
    }
  },

  // Get all murtikars from real-time API
  async getMurtikars() {
    const candidateUrls = [
      this.getBaseUrl(),
      ...DEFAULT_ENDPOINTS
    ];

    // Deduplicate candidate URLs
    const uniqueUrls = [...new Set(candidateUrls)];

    for (const baseUrl of uniqueUrls) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        // Try /portal/murtikars first, then fallback to /users/public-murtikars
        let res = await fetch(`${baseUrl}/portal/murtikars`, {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        }).catch(() => null);

        if (!res || !res.ok) {
          res = await fetch(`${baseUrl}/users/public-murtikars`, {
            signal: controller.signal,
            headers: { 'Accept': 'application/json' }
          }).catch(() => null);
        }

        clearTimeout(timeoutId);

        if (res && res.ok) {
          const json = await res.json();
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            console.log(`✅ Loaded real-time Murtikars data from ${baseUrl}`);
            return {
              data: json.data,
              isRealTime: true,
              sourceUrl: baseUrl,
              timestamp: new Date().toLocaleTimeString()
            };
          }
        }
      } catch (err) {
        // Continue to next candidate
      }
    }

    // Fallback to rich pre-populated dataset if server isn't running yet
    return {
      data: MURTIKARS_DATA,
      isRealTime: false,
      sourceUrl: null,
      timestamp: new Date().toLocaleTimeString()
    };
  },

  // Get murtikar by id
  async getMurtikarById(id) {
    const result = await this.getMurtikars();
    return result.data.find(m => m.id === id || m._id === id) || null;
  },

  // Submit inquiry from a Mandal
  async submitInquiry(inquiryData) {
    const newInquiry = {
      id: 'inq-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'Received',
      ...inquiryData
    };

    // Store in localStorage
    try {
      const existing = this.getStoredInquiries();
      const updated = [newInquiry, ...existing];
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    // Try posting to backend if online
    const baseUrl = this.getBaseUrl();
    try {
      fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry)
      }).catch(() => {});
    } catch {
      // Ignored if offline
    }

    return { success: true, inquiry: newInquiry };
  },

  // Get stored inquiries submitted by this mandal
  getStoredInquiries() {
    try {
      const data = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // Aggregate year-wise analytics across murtikars
  getAggregatedYearlyStats(murtikarsList = []) {
    const list = murtikarsList.length > 0 ? murtikarsList : MURTIKARS_DATA;
    const yearMap = {};

    list.forEach(murtikar => {
      if (murtikar.yearlyBookings && Array.isArray(murtikar.yearlyBookings)) {
        murtikar.yearlyBookings.forEach(yb => {
          if (!yearMap[yb.year]) {
            yearMap[yb.year] = {
              year: yb.year,
              totalBookings: 0,
              totalCapacity: 0,
              workshopsReporting: 0,
              ecoClayBookings: 0
            };
          }
          yearMap[yb.year].totalBookings += (yb.bookings || 0);
          yearMap[yb.year].totalCapacity += (yb.capacity || (yb.bookings + 5));
          yearMap[yb.year].workshopsReporting += 1;
          if (murtikar.ecoCertified) {
            yearMap[yb.year].ecoClayBookings += Math.round((yb.bookings || 0) * 0.65);
          }
        });
      }
    });

    return Object.values(yearMap).sort((a, b) => b.year - a.year);
  }
};
