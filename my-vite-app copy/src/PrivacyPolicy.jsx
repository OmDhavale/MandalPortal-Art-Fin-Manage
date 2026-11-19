import React from 'react';
import GlobalNavbar from './GlobalNavbar';
import './LegalPages.css';

export default function PrivacyPolicy({ navigate }) {
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com';
  return (
    <div className="legal-site">
      <GlobalNavbar navigate={navigate} active="privacy" />
      <main className="legal-main">
        <div className="legal-hero"><span className="legal-kicker">ART FINANCE MANAGEMENT</span><h1>Privacy Policy</h1><p>How information is handled when you use our website and mobile application.</p></div>
        <article className="legal-document">
          <div className="legal-meta"><span>Effective date: To be confirmed</span><span>Last updated: To be confirmed</span></div>
          <div className="legal-notice"><b>Publication note:</b> This is a draft structure. Before publishing, the operator must verify every data category, third-party service, retention period and contact detail against the production app, backend and Google Play Data Safety declarations.</div>
          <p>This Privacy Policy explains how Art Finance Management ("AFM", "we", "us" or "our") handles information in connection with the Art Finance Management website and mobile application (together, the "Services").</p>
          <h2>1. Information that may be processed</h2>
          <p>Depending on the features you use and the information you provide, the Services may process the following categories. The final published policy must be checked against the live implementation.</p>
          <ul><li><b>Account information:</b> details supplied during account registration and login, such as name, phone number and other account identifiers.</li><li><b>Workshop information:</b> workshop name, profile details, location and manager information entered by an account holder.</li><li><b>Mandal and booking information:</b> Mandal details, booking year, idol booking details, agreed prices and booking receipts where these are submitted.</li><li><b>Payment records:</b> payment amounts, dates, advances, installments and outstanding balances recorded in the application. AFM records entered payments; do not assume the app processes those Mandal payments unless that payment feature is actually enabled.</li><li><b>Subscription information:</b> subscription status and purchase-related identifiers needed to validate access to paid app features through Google Play.</li><li><b>Technical information:</b> limited device, browser, diagnostic or usage information, if collected by the deployed website, app or hosting services.</li><li><b>Support and inquiry information:</b> details you choose to include when contacting support or submitting a Mandal inquiry through the portal.</li></ul>
          <h2>2. How information is used</h2>
          <p>Information is used only for purposes supported by the Services, which may include creating and managing accounts, operating workshop and booking records, recording payments, displaying relevant history, responding to inquiries, supporting subscriptions, maintaining security and improving reliability.</p>
          <h2>3. Public profiles and Mandal Portal</h2>
          <p>The Mandal Portal may display selected Murtikar profile and booking information intended for public discovery. Workshop owners should only publish information they are authorized to share. Private account details, internal financial records and non-public customer information must not be made publicly accessible.</p>
          <h2>4. Sharing and service providers</h2>
          <p>Information may be processed by service providers that support the operation of the Services, such as application hosting, database infrastructure and Google Play subscription services, where applicable. The final policy should identify the actual providers and explain the relevant data flows. We do not state that information is shared with a provider unless that provider is used by the live Services.</p>
          <h2>5. Data security</h2>
          <p>We take reasonable steps appropriate to the Services to protect information. No method of electronic storage or transmission can be guaranteed to be completely secure.</p>
          <h2>6. Data retention</h2>
          <p>Information should be retained only for as long as needed for the purposes for which it was collected, subject to applicable legal, accounting and operational requirements. The operator must specify the actual retention and deletion practices before this policy is finalized.</p>
          <h2>7. Your choices and requests</h2>
          <p>You may contact us to request access to, correction of or deletion of information associated with your account, subject to applicable requirements and any information that must be retained. See our <a href="/delete-account" onClick={(e) => { e.preventDefault(); navigate('/delete-account'); }}>Account Deletion page</a> for instructions.</p>
          <h2>8. Children's privacy</h2>
          <p>The Services are intended for business users and Mandal representatives. The operator should confirm the age requirements and any safeguards that apply before publishing this policy.</p>
          <h2>9. Changes to this policy</h2>
          <p>We may update this Privacy Policy when the Services or applicable requirements change. The updated version will be posted on this page with a revised effective or updated date.</p>
          <h2>10. Contact</h2>
          <p>For privacy-related questions or requests, contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        </article>
        <button className="legal-back" onClick={() => navigate('/')}>← Back to website</button>
      </main>
      <LegalFooter navigate={navigate} supportEmail={supportEmail} />
    </div>
  );
}

export function LegalFooter({ navigate, supportEmail }) {
  return <footer className="legal-footer"><span>© {new Date().getFullYear()} Art Finance Management</span><div><button onClick={() => navigate('/')}>Home</button><button onClick={() => navigate('/mandal-portal')}>Mandal Portal</button><a href={`mailto:${supportEmail}`}>Contact</a></div></footer>;
}
