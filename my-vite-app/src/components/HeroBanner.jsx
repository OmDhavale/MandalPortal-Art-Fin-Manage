import React from 'react';
import { IconUsers, IconCalendar, IconTrendingUp, IconBriefcase } from './Icons';

export default function HeroBanner({ t, lang, murtikarsCount, totalBookingsAllTime, activeYearsCount, openAnalytics }) {
  return (
    <section className="hero-banner">
      <div className="hero-overlay-glow"></div>
      <div className="hero-content container">
        <h2 className="hero-heading">
          {lang === 'mr' ? (
            <>सर्व <span className="text-gradient">मूर्तिकार व कार्यशाळांची</span> माहिती एकाच ठिकाणी</>
          ) : (
            <>Real-Time <span className="text-gradient">Murtikar & Workshop Directory</span></>
          )}
        </h2>

        <p className="hero-subtext">{t.tagline}</p>

        {/* Real Summary Metrics */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <div className="stat-icon-wrap orange">
              <IconUsers size={20} color="#F97316" />
            </div>
            <div className="stat-text-col">
              <span className="stat-number">{murtikarsCount}</span>
              <span className="stat-name">{t.statMurtikars}</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrap blue">
              <IconBriefcase size={20} color="#0284C7" />
            </div>
            <div className="stat-text-col">
              <span className="stat-number">{murtikarsCount}</span>
              <span className="stat-name">{t.statWorkshops}</span>
            </div>
          </div>

          <div className="hero-stat-card clickable" onClick={openAnalytics} title="View Year-Wise Breakdown">
            <div className="stat-icon-wrap emerald">
              <IconTrendingUp size={20} color="#10B981" />
            </div>
            <div className="stat-text-col">
              <span className="stat-number">{totalBookingsAllTime}</span>
              <span className="stat-name">{t.statBookings}</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrap amber">
              <IconCalendar size={20} color="#D97706" />
            </div>
            <div className="stat-text-col">
              <span className="stat-number">{activeYearsCount}</span>
              <span className="stat-name">{t.statActiveYears}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
