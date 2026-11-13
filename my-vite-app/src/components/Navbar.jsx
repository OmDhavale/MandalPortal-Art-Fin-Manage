import React from 'react';
import { IconGlobe, IconCompare, IconCalendar, IconUsers, IconBriefcase } from './Icons';

export default function Navbar({ lang, setLang, t, compareCount, onOpenCompare, onOpenAnalytics, onOpenInquiries, inquiriesCount }) {
  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Brand */}
        <div className="brand-wrap">
          <div className="brand-logo-circle">
            <img src="/ganesha_logo.png" alt="Ganesh Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-title">{t.portalTitle}</h1>
              <span className="brand-tag">AFM Mandal Hub</span>
            </div>
            <p className="brand-subtitle">{t.portalSubtitle}</p>
          </div>
        </div>

        {/* Center / Actions */}
        <nav className="header-nav">
          <button 
            type="button" 
            className="nav-btn active"
            onClick={() => window.scrollTo({ top: 380, behavior: 'smooth' })}
          >
            <IconUsers size={16} />
            <span>{t.navDirectory}</span>
          </button>

          <button 
            type="button" 
            className="nav-btn"
            onClick={onOpenAnalytics}
          >
            <IconCalendar size={16} />
            <span>{t.navAnalytics}</span>
          </button>

          <button 
            type="button" 
            className="nav-btn"
            onClick={onOpenInquiries}
          >
            <IconBriefcase size={16} />
            <span>{t.navMyInquiries}</span>
            {inquiriesCount > 0 && <span className="nav-badge-pill">{inquiriesCount}</span>}
          </button>
        </nav>

        {/* Right side utils */}
        <div className="header-right">
          {/* Compare Pill */}
          <button 
            type="button" 
            className={`compare-top-pill ${compareCount > 0 ? 'highlight' : ''}`}
            onClick={onOpenCompare}
            title={t.compareTitle}
          >
            <IconCompare size={15} />
            <span>{t.navCompare}</span>
            <span className="compare-badge">{compareCount}</span>
          </button>

          {/* Language Toggle */}
          <div className="lang-switcher">
            <button 
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button 
              type="button"
              className={`lang-btn ${lang === 'mr' ? 'active' : ''}`}
              onClick={() => setLang('mr')}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

