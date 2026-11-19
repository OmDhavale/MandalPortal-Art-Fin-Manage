import React from 'react';
import GlobalNavbar from './GlobalNavbar';
import { LegalFooter } from './PrivacyPolicy';
import './LegalPages.css';

export default function DeleteAccount({ navigate }) {
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com';
  return (
    <div className="legal-site">
      <GlobalNavbar navigate={navigate} active="delete" />
      <main className="legal-main">
        <div className="legal-hero"><span className="legal-kicker">ACCOUNT & DATA CONTROL</span><h1>Request Account Deletion</h1><p>Find out how to request deletion of your Art Finance Management account and associated data.</p></div>
        <article className="legal-document deletion-document">
          <div className="legal-notice"><b>Important:</b> Sending an email starts a deletion request. It does not mean your account has already been deleted.</div>
          <h2>How to request deletion</h2>
          <ol><li>Send an email to <a href={`mailto:${supportEmail}?subject=Account%20Deletion%20Request`}>{supportEmail}</a> using the email address or phone number associated with your account.</li><li>Use the subject line <b>Account Deletion Request – Art Finance Management</b>.</li><li>Include your registered name, registered phone number and any information reasonably needed to identify your account. Do not send your password or OTP.</li><li>Our support team will review the request and may contact you to verify account ownership before processing it.</li></ol>
          <a className="deletion-email-button" href={`mailto:${supportEmail}?subject=Account%20Deletion%20Request%20%E2%80%93%20Art%20Finance%20Management`}>Email account deletion request <span>↗</span></a>
          <h2>What happens after a request?</h2>
          <p>After verifying the request, the team will process it in accordance with the application's deletion procedures and applicable requirements. You may be contacted if additional verification is needed.</p>
          <h2>What data may be deleted?</h2>
          <p>Depending on the account and records involved, deletion may cover account profile information and personal data associated with the account. Some records may need to be retained where required by law, for legitimate accounting or dispute-resolution purposes, or where they relate to other users' transactions. The final retention and deletion rules should be confirmed by the service operator and reflected in the Privacy Policy.</p>
          <h2>Need help?</h2>
          <p>For questions about an existing deletion request, email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        </article>
        <button className="legal-back" onClick={() => navigate('/')}>← Back to website</button>
      </main>
      <LegalFooter navigate={navigate} supportEmail={supportEmail} />
    </div>
  );
}
