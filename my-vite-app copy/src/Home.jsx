import React from 'react';
import './Home.css';
import GlobalNavbar from './GlobalNavbar';
import Footer from './components/Footer';
import { IconUsers, IconCalendar, IconBriefcase, IconTrendingUp, IconShieldCheck, IconSparkles } from './components/Icons';

const features = [
  { icon: <IconUsers size={22} />, title: 'Mandal Management', text: 'Create and maintain Mandal profiles when accepting bookings, with a consistent identity across seasons.' },
  { icon: <IconCalendar size={22} />, title: 'Booking Management', text: 'Organize year-wise Ganpati idol bookings, agreed prices and booking receipts in one place.' },
  { icon: <IconBriefcase size={22} />, title: 'Payment Tracking', text: 'Record advances and installments, and keep an up-to-date view of outstanding balances.' },
  { icon: <IconTrendingUp size={22} />, title: 'Mandal Payment Insights', text: 'Understand payment status through colour-coded grades and available history features.' },
  { icon: <IconShieldCheck size={22} />, title: 'Historical Records', text: 'Keep previous booking and payment records organized, subject to plan access and permissions.' },
  { icon: <IconSparkles size={22} />, title: 'Workshop Management', text: 'Give your workshop a more organized way to manage day-to-day booking and payment activity.' },
];

export default function Home({ navigate }) {
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL || '';
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com';
  const download = () => playStoreUrl ? window.open(playStoreUrl, '_blank', 'noopener,noreferrer') : window.alert('The Google Play download link will be available soon.');

  return (
    <div className="marketing-site">
      <GlobalNavbar navigate={navigate} active="home" />
      <main>
        <section className="marketing-hero">
          <div className="marketing-hero-glow glow-one" /><div className="marketing-hero-glow glow-two" />
          <div className="marketing-container marketing-hero-grid">
            <div className="marketing-hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR GANPATI MURTIKARS</div>
              <h1>Manage your workshop.<br /><span>Simplify your business.</span></h1>
              <p className="marketing-lead">Your business companion for Mandal bookings, payment tracking and workshop records — thoughtfully designed for Ganpati Murtikars.</p>
              <div className="marketing-actions">
                <button className="button-primary" onClick={download}>Download the App <span>↗</span></button>
                <button className="button-secondary" onClick={() => navigate('/mandal-portal')}>Explore Mandal Portal <span>→</span></button>
              </div>
              <div className="hero-note"><span className="note-check">✓</span> Bring your bookings and payment records together.</div>
            </div>
            <div className="hero-product-visual" aria-label="Illustrative application dashboard preview">
              <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
              <div className="app-preview-card">
                <div className="preview-top"><div className="preview-brand"><span className="preview-logo">A</span><span><b>Art Finance</b><small>Workshop overview</small></span></div><span className="preview-avatar">M</span></div>
                <div className="preview-welcome"><small>YOUR WORKSPACE</small><h3>Good morning!</h3><p>Here's your workshop at a glance.</p></div>
                <div className="preview-metrics">
                  <div><small>Total bookings</small><strong>24</strong><em>Selected year</em></div>
                  <div><small>Payments received</small><strong>₹4.8L</strong><em>Recorded payments</em></div>
                </div>
                <div className="preview-section-head"><b>Payment overview</b><span>View records</span></div>
                <div className="preview-payment-row"><span className="payment-dot green" /><span>Fully paid</span><b>12</b></div>
                <div className="preview-payment-row"><span className="payment-dot yellow" /><span>Payment pending</span><b>8</b></div>
                <div className="preview-payment-row"><span className="payment-dot red" /><span>High pending</span><b>4</b></div>
                <div className="preview-bottom"><span>Illustrative interface preview</span><span>AFM</span></div>
              </div>
              <div className="floating-chip chip-booking"><span>✓</span> Bookings organized</div>
              <div className="floating-chip chip-payment"><span>₹</span> Payments tracked</div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="trust-strip">
          <div className="marketing-container trust-strip-inner"><span>MADE FOR THE PEOPLE BEHIND THE IDOLS</span><i /> <b>Bookings</b><i /> <b>Payments</b><i /> <b>Workshop records</b></div>
        </section>

        <section className="marketing-section intro-section">
          <div className="marketing-container intro-grid">
            <div><div className="section-eyebrow">A BETTER WAY TO MANAGE</div><h2>Less time on registers.<br /><span>More clarity in business.</span></h2></div>
            <div className="intro-copy"><p>Every season brings new Mandal bookings, price discussions, advances and pending payments. When everything lives in notebooks and scattered records, keeping track can become difficult.</p><p>Art Finance Management brings these everyday workshop activities into one organized digital platform — so you can focus more on your craft and your business.</p></div>
          </div>
        </section>

        <section className="marketing-section features-section" id="features">
          <div className="marketing-container">
            <div className="section-heading"><div className="section-eyebrow">MADE AROUND YOUR WORKFLOW</div><h2>Everything your workshop<br /><span>needs to stay organized.</span></h2><p>Practical tools for the way Ganpati idol-making businesses work.</p></div>
            <div className="feature-grid">{features.map((feature, index) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </div>
        </section>

        <section className="marketing-section workflow-section">
          <div className="marketing-container workflow-grid">
            <div className="workflow-copy"><div className="section-eyebrow">SIMPLE BY DESIGN</div><h2>Your workshop records,<br /><span>step by step.</span></h2><p>Keep the everyday process straightforward — from the first booking to the final payment.</p><button className="text-link" onClick={() => navigate('/mandal-portal')}>Visit the Mandal Portal <span>→</span></button></div>
            <div className="workflow-steps">
              {[['01','Add a Mandal','Create a Mandal profile when you accept a booking.'],['02','Record the booking','Save the year, agreed price and advance details.'],['03','Track every payment','Add installments and see the remaining balance.'],['04','Review your records','Refer to booking history and payment insights available in your plan.']].map(step => <div className="workflow-step" key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="marketing-section portal-promo-section">
          <div className="marketing-container portal-promo">
            <div><div className="section-eyebrow">FOR GANPATI MANDALS</div><h2>Discover Murtikars<br />through the Mandal Portal.</h2><p>Explore public Murtikar profiles and the booking information they have chosen to share. Compare workshops and send an inquiry through the portal.</p><button className="button-light" onClick={() => navigate('/mandal-portal')}>Explore Mandal Portal <span>→</span></button></div>
            <div className="portal-art"><div className="portal-art-circle"><span>AFM</span><b>Find your<br />Murtikar</b><small>Discover · Compare · Connect</small></div><div className="portal-art-spark">✳</div></div>
          </div>
        </section>

        <section className="marketing-section plan-section">
          <div className="marketing-container plan-inner"><div><div className="section-eyebrow">PLANS THAT GROW WITH YOU</div><h2>Start simple.<br /><span>Unlock more with PRO.</span></h2><p>Use the core booking and payment tools, then upgrade when you need broader Mandal history and workshop access.</p></div><div className="plan-cards"><article className="plan-card"><span className="plan-label">START HERE</span><h3>FREE</h3><p>For getting your workshop records organized.</p><ul><li>Limited bookings</li><li>Manage Mandal payments</li><li>Access to your own data</li><li>Grades for limited Mandals</li></ul></article><article className="plan-card pro"><span className="plan-label">MORE WORKSHOP INSIGHT</span><h3>PRO</h3><p>For Murtikars who need more history and team support.</p><ul><li>Previous pending payment history</li><li>Full Mandal Grade System</li><li>Multi-manager support</li></ul><small>Yearly subscription in the app. Price shown in-app.</small></article></div></div>
        </section>

        <section className="download-section"><div className="marketing-container download-inner"><div className="download-mark">A</div><div><div className="section-eyebrow">READY WHEN YOU ARE</div><h2>Bring your workshop<br />management together.</h2><p>Make your bookings and payment records easier to manage with Art Finance Management.</p></div><button className="button-primary download-final" onClick={download}>Download the App <span>↗</span></button></div></section>
      </main>
      <MarketingFooter navigate={navigate} supportEmail={supportEmail} />
    </div>
  );
}

function MarketingFooter({ navigate, supportEmail }) {
  return <footer className="marketing-footer"><div className="marketing-container footer-main"><div className="footer-brand-block"><div className="footer-brand-lockup"><span className="footer-brand-icon">A</span><b>Art Finance Management</b></div><p>Business management tools designed around the needs of Ganpati Murtikars and idol-making workshops.</p></div><div className="footer-nav-col"><b>Explore</b><button onClick={() => navigate('/')}>Home</button><button onClick={() => navigate('/mandal-portal')}>Mandal Portal</button></div><div className="footer-nav-col"><b>Information</b><button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button><button onClick={() => navigate('/delete-account')}>Delete Account</button><a href={`mailto:${supportEmail}`}>Contact Support</a></div></div><div className="marketing-container footer-bottom"><span>© {new Date().getFullYear()} Art Finance Management. All rights reserved.</span><span>Made with care in India 🇮🇳</span></div></footer>;
}
