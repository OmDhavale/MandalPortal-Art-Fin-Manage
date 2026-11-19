import React, { useState } from 'react';
import { IconCompare, IconCalendar, IconUsers, IconBriefcase } from './Icons';

/**
 * Unified Mandal Portal navigation.
 * Combines the official AFM website links and the existing portal controls
 * so the portal renders a single header instead of two stacked navbars.
 */
export default function Navbar({
  navigate,
  lang,
  setLang,
  t,
  compareCount,
  onOpenCompare,
  onOpenAnalytics,
  onOpenInquiries,
  inquiriesCount
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com';

  const go = (path) => {
    setMenuOpen(false);
    navigate?.(path);
  };

  const scrollToDirectory = () => {
    setMenuOpen(false);
    const target = document.querySelector('.search-filter-section') || document.querySelector('.hero-banner');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="site-header afm-single-header">
      <div className="afm-single-nav">
        <button className="afm-brand" type="button" onClick={() => go('/')} aria-label="Art Finance Management home">
          <span className="afm-brand-mark">
            <img src="/ganesha_logo.png" alt="" />
          </span>
          <span className="afm-brand-copy">
            <strong>Art Finance Management</strong>
            <small>Business tools for Murtikars</small>
          </span>
        </button>

        <button
          className="afm-mobile-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <div className={`afm-nav-content ${menuOpen ? 'is-open' : ''}`}>
          <nav className="afm-site-links" aria-label="Website navigation">
            <button type="button" onClick={() => go('/')}>Home</button>
            <button type="button" className="active" onClick={() => go('/mandal-portal')}>Mandal Portal</button>
            <button type="button" onClick={() => go('/privacy-policy')}>Privacy Policy</button>
            <button type="button" onClick={() => go('/delete-account')}>Delete Account</button>
            <a href={`mailto:${supportEmail}`}>Contact Support <span>↗</span></a>
          </nav>

          <div className="afm-portal-tools" aria-label="Mandal Portal tools">
            <button type="button" className="afm-tool-button active" onClick={scrollToDirectory}>
              <IconUsers size={15} /><span>{t.navDirectory}</span>
            </button>
            <button type="button" className="afm-tool-button" onClick={() => { setMenuOpen(false); onOpenAnalytics(); }}>
              <IconCalendar size={15} /><span>{t.navAnalytics}</span>
            </button>
            <button type="button" className="afm-tool-button" onClick={() => { setMenuOpen(false); onOpenInquiries(); }}>
              <IconBriefcase size={15} /><span>{t.navMyInquiries}</span>
              {inquiriesCount > 0 && <span className="afm-count">{inquiriesCount}</span>}
            </button>
            <button type="button" className="afm-compare-button" onClick={() => { setMenuOpen(false); onOpenCompare(); }}>
              <IconCompare size={15} /><span>{t.navCompare}</span><b>{compareCount}</b>
            </button>
            <div className="lang-switcher" aria-label="Choose language">
              <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              <button type="button" className={`lang-btn ${lang === 'mr' ? 'active' : ''}`} onClick={() => setLang('mr')}>मराठी</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
