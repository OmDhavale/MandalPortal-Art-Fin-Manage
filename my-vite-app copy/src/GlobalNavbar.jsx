import React, { useState } from 'react';
import './GlobalNavbar.css';
import logo from './assets/ganesha_logo.png';

export default function GlobalNavbar({ navigate, active = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="global-header">
      <div className="global-nav-inner">
        <button className="global-brand" onClick={() => go('/')} aria-label="Art Finance Management home">
          <span className="global-brand-mark"><img src={logo} alt="" /></span>
          <span className="global-brand-copy">
            <strong>Art Finance Management</strong>
            <small>Business tools for Murtikars</small>
          </span>
        </button>

        <button
          className="global-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`global-nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <button className={active === 'home' ? 'active' : ''} onClick={() => go('/')}>Home</button>
          <button className={active === 'portal' ? 'active' : ''} onClick={() => go('/mandal-portal')}>Mandal Portal</button>
          <button className={active === 'privacy' ? 'active' : ''} onClick={() => go('/privacy-policy')}>Privacy Policy</button>
          {/* <button className={active === 'delete' ? 'active' : ''} onClick={() => go('/delete-account')}>Delete Account</button> */}
          <a className="global-nav-cta" href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com'}`}>Contact Support <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
