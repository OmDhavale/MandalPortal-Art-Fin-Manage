import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SearchAndFilters from './components/SearchAndFilters';
import MurtikarCard from './components/MurtikarCard';
import MurtikarModal from './components/MurtikarModal';
import CompareModal from './components/CompareModal';
import InquiryModal from './components/InquiryModal';
import YearWiseAnalyticsView from './components/YearWiseAnalyticsView';
import MyInquiriesModal from './components/MyInquiriesModal';
import Footer from './components/Footer';

import { translations } from './translations';
import { apiService } from './services/api';
import './App.css';

export default function App({ navigate }) {
  const [lang, setLang] = useState('en');
  const [murtikars, setMurtikars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiMeta, setApiMeta] = useState({ isRealTime: false, sourceUrl: null, timestamp: '' });

  // Filters & Sorting state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [sortBy, setSortBy] = useState('bookingsDesc');

  // Modals state
  const [selectedMurtikar, setSelectedMurtikar] = useState(null);
  const [comparedList, setComparedList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showInquiriesModal, setShowInquiriesModal] = useState(false);
  const [inquiryTargetMurtikar, setInquiryTargetMurtikar] = useState(null);
  const [inquiries, setInquiries] = useState([]);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  const t = translations[lang] || translations.en;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Function to load data from API
  const loadData = async (isManualRefresh = false) => {
    setLoading(true);
    try {
      const res = await apiService.getMurtikars();
      setMurtikars(res.data || []);
      setApiMeta({
        isRealTime: res.isRealTime,
        sourceUrl: res.sourceUrl,
        timestamp: res.timestamp
      });

      if (isManualRefresh) {
        if (res.isRealTime) {
          showToast(lang === 'mr' ? 'थेट डेटाबेसशी कनेक्ट झाले!' : `Connected to live API @ ${res.sourceUrl}`);
        } else {
          showToast(lang === 'mr' ? 'बॅकएंड सर्व्हर तपासले (पोर्ट ५००० उपलब्ध नाही)' : 'Tested backend @ http://localhost:5000/api');
        }
      }
    } catch (err) {
      console.error('Failed to load murtikars:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load data on start
  useEffect(() => {
    loadData();

    // Load inquiries
    const savedInquiries = apiService.getStoredInquiries();
    setInquiries(savedInquiries);
  }, []);

  // Dynamically extract distinct cities from loaded murtikars
  const availableCities = useMemo(() => {
    const set = new Set();
    murtikars.forEach(m => {
      if (m.location?.city && m.location.city.trim()) {
        set.add(m.location.city.trim());
      }
    });
    return ['All', ...Array.from(set)];
  }, [murtikars]);

  // Distinct recorded years count across all bookings
  const activeYearsCount = useMemo(() => {
    const years = new Set();
    murtikars.forEach(m => {
      if (m.yearlyBookings) {
        m.yearlyBookings.forEach(yb => {
          if (yb.year) years.add(yb.year);
        });
      }
    });
    return Math.max(1, years.size);
  }, [murtikars]);

  // Compare toggling
  const handleToggleCompare = (murtikar) => {
    const exists = comparedList.some(item => item.id === murtikar.id);
    if (exists) {
      setComparedList(prev => prev.filter(item => item.id !== murtikar.id));
      showToast(lang === 'mr' ? 'तुलनेतून काढले' : 'Removed from comparison');
    } else {
      if (comparedList.length >= 3) {
        alert(lang === 'mr' ? 'एकावेळी जास्तीत जास्त ३ मूर्तिकारांची तुलना करता येते.' : 'You can compare up to 3 murtikars simultaneously.');
        return;
      }
      setComparedList(prev => [...prev, murtikar]);
      showToast(lang === 'mr' ? `${murtikar.workshopName} तुलनेसाठी जोडले` : `Added to comparison: ${murtikar.workshopName}`);
    }
  };

  // Inquiries submission
  const handleInquirySuccess = async (inquiryData) => {
    const res = await apiService.submitInquiry(inquiryData);
    if (res.success) {
      setInquiries(prev => [res.inquiry, ...prev]);
      showToast(lang === 'mr' ? 'चौकशी यशस्वीरीत्या नोंदवली गेली!' : 'Mandal inquiry successfully registered!');
    }
  };

  // Aggregated yearly analytics stats
  const yearlyStats = useMemo(() => {
    return apiService.getAggregatedYearlyStats(murtikars);
  }, [murtikars]);

  const totalBookingsAllTime = useMemo(() => {
    return murtikars.reduce((acc, m) => {
      const bookingsSum = m.yearlyBookings?.reduce((sum, b) => sum + (b.bookingsCount || b.bookings || 0), 0) || 0;
      return acc + (m.totalBookings || bookingsSum);
    }, 0);
  }, [murtikars]);

  // Filtering & Sorting (strictly based on real data)
  const filteredMurtikars = useMemo(() => {
    return murtikars.filter(m => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const searchCorpus = [
          m.workshopName,
          m.murtikarName,
          m.phone,
          m.location?.area,
          m.location?.city,
          ...(m.pastMandals ? m.pastMandals.map(pm => pm.ganpatiTitle || pm.name || pm.mandalName) : []),
          ...(m.managers ? m.managers.map(mgr => mgr.name) : [])
        ].filter(Boolean).join(' ').toLowerCase();

        if (!searchCorpus.includes(q)) return false;
      }

      // City Filter
      if (selectedCity !== 'All') {
        if (!m.location?.city || m.location.city.toLowerCase() !== selectedCity.toLowerCase()) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'bookingsDesc') {
        const totalA = a.totalBookings || a.yearlyBookings?.reduce((s, x) => s + (x.bookingsCount || x.bookings || 0), 0) || 0;
        const totalB = b.totalBookings || b.yearlyBookings?.reduce((s, x) => s + (x.bookingsCount || x.bookings || 0), 0) || 0;
        return totalB - totalA;
      }
      if (sortBy === 'nameAsc') {
        return (a.workshopName || '').localeCompare(b.workshopName || '');
      }
      return 0;
    });
  }, [murtikars, searchQuery, selectedCity, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCity('All');
    setSortBy('bookingsDesc');
  };

  return (
    <div className="app-layout">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        navigate={navigate}
        lang={lang}
        setLang={setLang}
        t={t}
        compareCount={comparedList.length}
        onOpenCompare={() => setShowCompareModal(true)}
        onOpenAnalytics={() => setShowAnalyticsModal(true)}
        onOpenInquiries={() => setShowInquiriesModal(true)}
        inquiriesCount={inquiries.length}
      />

      <main className="main-content">
        {/* Hero Section */}
        <HeroBanner
          t={t}
          lang={lang}
          murtikarsCount={murtikars.length}
          totalBookingsAllTime={totalBookingsAllTime}
          activeYearsCount={activeYearsCount}
          openAnalytics={() => setShowAnalyticsModal(true)}
        />

        {/* Real-Time Backend API Status Bar
        <section className="api-status-banner-wrap container">
          <div className={`api-status-banner ${apiMeta.isRealTime ? 'live' : 'standby'}`}>
            <div className="status-indicator-col">
              <span className={`live-pulse-dot ${apiMeta.isRealTime ? 'active' : ''}`}></span>
              <div className="status-text-block">
                <strong>
                  {apiMeta.isRealTime
                    ? (lang === 'mr' ? 'थेट डेटाबेस कनेक्ट आहे (Real-Time MongoDB Data)' : 'Live Real-Time Data Active')
                    : (lang === 'mr' ? 'पोर्टल तयार (Art-Finance-Management API शी कनेक्ट करण्यास सज्ज)' : 'Art-Finance-Management API Ready')}
                </strong>
                <span className="status-source-text">
                  {apiMeta.isRealTime
                    ? `Endpoint: ${apiMeta.sourceUrl}/portal/murtikars · Synced at ${apiMeta.timestamp}`
                    : `Backend: http://localhost:5000/api · Click Refresh to poll live backend`}
                </span>
              </div>
            </div>

            <button 
              type="button" 
              className="refresh-api-btn"
              onClick={() => loadData(true)}
              title="Poll latest from backend"
            >
              🔄 {lang === 'mr' ? 'रिफ्रेश करा' : 'Refresh Data'}
            </button>
          </div>
        </section> */}

        {/* Search & City Filter Bar */}
        <SearchAndFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cities={availableCities}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleResetFilters}
          totalResults={filteredMurtikars.length}
          t={t}
          lang={lang}
        />

        {/* Murtikars Grid */}
        <section className="murtikars-grid-section container">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>{lang === 'mr' ? 'मूर्तिकार माहिती लोड होत आहे...' : 'Loading Murtikars from backend...'}</p>
            </div>
          ) : filteredMurtikars.length === 0 ? (
            <div className="empty-results-state">
              <h3>{lang === 'mr' ? 'कोणताही मूर्तिकार सापडला नाही' : 'No Murtikars Found'}</h3>
              <p>{lang === 'mr' ? 'कृपया शोधशब्द किंवा शहर बदलून पुन्हा प्रयत्न करा.' : 'Try adjusting your search query or city selection.'}</p>
              <button type="button" className="btn-primary-view" onClick={handleResetFilters}>
                {t.resetFilters}
              </button>
            </div>
          ) : (
            <div className="murtikars-cards-grid">
              {filteredMurtikars.map(murtikar => (
                <MurtikarCard
                  key={murtikar.id}
                  murtikar={murtikar}
                  t={t}
                  lang={lang}
                  onSelect={(m) => setSelectedMurtikar(m)}
                  isCompared={comparedList.some(c => c.id === murtikar.id)}
                  onToggleCompare={handleToggleCompare}
                  onOpenInquiry={(m) => setInquiryTargetMurtikar(m)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Floating Compare Tray (when items selected) */}
      {comparedList.length > 0 && !showCompareModal && (
        <aside className="floating-compare-tray">
          <div className="compare-tray-inner">
            <span className="tray-text">
              {comparedList.length} {lang === 'mr' ? 'मूर्तिकार निवडले आहेत' : 'Murtikar(s) Selected'}
            </span>
            <div className="tray-actions">
              <button 
                type="button" 
                className="btn-tray-view"
                onClick={() => setShowCompareModal(true)}
              >
                {t.compareTitle} ({comparedList.length}) →
              </button>
              <button 
                type="button" 
                className="btn-tray-clear"
                onClick={() => setComparedList([])}
                title="Clear all"
              >
                ✕
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* MODAL 1: Murtikar Full Profile & Year-Wise Analytics */}
      {selectedMurtikar && (
        <MurtikarModal
          murtikar={selectedMurtikar}
          onClose={() => setSelectedMurtikar(null)}
          t={t}
          lang={lang}
          onOpenInquiry={(m) => setInquiryTargetMurtikar(m)}
        />
      )}

      {/* MODAL 2: Side-by-Side Comparison */}
      {showCompareModal && (
        <CompareModal
          comparedList={comparedList}
          onClose={() => setShowCompareModal(false)}
          onRemove={(id) => setComparedList(prev => prev.filter(c => c.id !== id))}
          onClear={() => setComparedList([])}
          t={t}
          lang={lang}
          onOpenInquiry={(m) => setInquiryTargetMurtikar(m)}
        />
      )}

      {/* MODAL 3: Submit Mandal Inquiry Form */}
      {inquiryTargetMurtikar && (
        <InquiryModal
          murtikar={inquiryTargetMurtikar}
          onClose={() => setInquiryTargetMurtikar(null)}
          onSubmitSuccess={handleInquirySuccess}
          t={t}
          lang={lang}
        />
      )}

      {/* MODAL 4: Aggregate Year-Wise Analytics */}
      {showAnalyticsModal && (
        <YearWiseAnalyticsView
          yearlyStats={yearlyStats}
          onClose={() => setShowAnalyticsModal(false)}
          t={t}
          lang={lang}
        />
      )}

      {/* MODAL 5: My Inquiries Tracker */}
      {showInquiriesModal && (
        <MyInquiriesModal
          inquiries={inquiries}
          onClose={() => setShowInquiriesModal(false)}
          t={t}
          lang={lang}
        />
      )}

      {/* Footer */}
      <Footer t={t} lang={lang} navigate={navigate} />
    </div>
  );
}
