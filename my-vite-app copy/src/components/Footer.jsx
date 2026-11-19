import React from 'react';
import { IconSparkles, IconShieldCheck, IconPhone, IconAward } from './Icons';

export default function Footer({ t, lang, navigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <img src="/ganesha_logo.png" alt="Ganesh Logo" className="footer-logo-img" />
            <div>
              <h3 className="footer-brand-title">{t.portalTitle}</h3>
              <span className="footer-brand-sub">Art Finance Management Ecosystem</span>
            </div>
          </div>
          <p className="footer-desc">
            {lang === 'mr' 
              ? 'महाराष्ट्रातील सर्व सार्वजनिक गणेश मंडळे, गृहनिर्माण संस्था आणि मूर्तिकार यांच्यातील विश्वासार्ह सेतू.' 
              : 'The premier discovery and verification portal connecting Ganesh Mandals with renowned master sculptors across Maharashtra.'}
          </p>
          <div className="blessing-badge">
            <IconSparkles size={14} color="#F97316" />
            <span>गणपती बाप्पा मोरया! मंगलमूर्ती मोरया!</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{lang === 'mr' ? 'मंडळांसाठी मार्गदर्शक' : 'Mandal Guidelines'}</h4>
          <ul className="footer-links">
            <li>✓ {lang === 'mr' ? 'अक्षय्य तृतीयेपूर्वी स्लॉट निश्चित करा' : 'Book slots before Akshaya Tritiya'}</li>
            <li>✓ {lang === 'mr' ? 'शाडू माती व विसर्जन नियमांची खात्री करा' : 'Verify 100% Eco Shadu Mati norms'}</li>
            <li>✓ {lang === 'mr' ? 'व्यवस्थापकांशी आगमन वेळेचे नियोजन करा' : 'Confirm arrival trolley dimensions'}</li>
            <li>✓ {lang === 'mr' ? 'वर्षनिहाय ट्रॅक रेकॉर्ड तपासून आगाऊ रक्कम द्या' : 'Review past years before token advance'}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{lang === 'mr' ? 'कार्यशाळा नोंदणी व संपर्क' : 'Artist Connect'}</h4>
          <p className="footer-text-sm">
            {lang === 'mr' 
              ? 'आपण मूर्तिकार आहात आणि आपली कार्यशाळा या पोर्टलवर नोंदवायची आहे?' 
              : 'Are you a workshop owner looking to list your artisans & bookings?'}
          </p>
          <div className="footer-contact-box">
            <span className="support-badge">AFM Support Desk</span>
            <p className="support-phone">+91 98927 83192</p>
            <span className="support-timing">Mon - Sat (10:00 AM - 8:00 PM)</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Art Finance Management. {t.allRightsReserved}
          </p>
          <div className="portal-footer-links">
            {navigate && <>
              <button type="button" onClick={() => navigate('/')}>Home</button>
              <button type="button" onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
              <button type="button" onClick={() => navigate('/delete-account')}>Delete Account</button>
            </>}
            <span className="made-in-india-badge">🇮🇳 Proudly Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

