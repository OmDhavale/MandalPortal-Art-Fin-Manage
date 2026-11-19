
import React from 'react';
import GlobalNavbar from './GlobalNavbar';
import './LegalPages.css';

const PolicySection = ({ id, title, children }) => (
  <section className="policy-section" id={id}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function PrivacyPolicy({ navigate }) {
  const supportEmail =
    import.meta.env.VITE_SUPPORT_EMAIL || 'coderzhiveai@gmail.com';

  const effectiveDate = '19 November 2026';

  return (
    <div className="legal-site">
      <GlobalNavbar navigate={navigate} active="privacy" />

      <main className="legal-main">
        <div className="legal-hero">
          <span className="legal-kicker">
            ART FINANCE MANAGEMENT
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. Learn how Art Finance Management
            collects, uses, stores and protects information when you use
            our mobile application and website.
          </p>
        </div>

        <article className="legal-document">
          <div className="legal-meta">
            <span>Effective Date: {effectiveDate}</span>
            <span>Last Updated: {effectiveDate}</span>
          </div>

          <p>
            Art Finance Management ("AFM", "we", "our" or "us") is a
            business management platform designed for Ganpati Murtikars
            and idol-making workshops.
          </p>

          <p>
            This Privacy Policy explains how we handle information
            collected through the Art Finance Management mobile
            application, website and associated services (collectively,
            the "Services").
          </p>

          <p>
            By accessing or using our Services, you acknowledge that
            you have read this Privacy Policy.
          </p>

          <PolicySection id="information-collected" title="1. Information We Collect">
            <p>
              Depending on the features you use and the information
              you provide, we may collect or process the following
              categories of information:
            </p>

            <h3>1.1 Account and Registration Information</h3>
            <ul>
              <li>Name and account details.</li>
              <li>Mobile number and contact information.</li>
              <li>Login credentials and authentication-related information.</li>
              <li>Account role and associated workshop information.</li>
            </ul>

            <h3>1.2 Workshop and Murtikar Information</h3>
            <ul>
              <li>Workshop or business name.</li>
              <li>Murtikar name and profile information.</li>
              <li>Workshop location, city and area.</li>
              <li>Manager details and workshop associations.</li>
            </ul>

            <h3>1.3 Mandal and Booking Information</h3>
            <ul>
              <li>Ganpati Mandal names and relevant identification details.</li>
              <li>Booking year and idol booking information.</li>
              <li>Original quoted prices and final agreed prices.</li>
              <li>Advance payments, installments and outstanding balances.</li>
              <li>Booking receipts or other documents uploaded by users.</li>
            </ul>

            <h3>1.4 Payment and Transaction Records</h3>
            <p>
              The application allows authorized users to maintain
              records of payments received from Mandals, including
              payment amounts, dates, advances, installments and
              remaining balances.
            </p>
            <p>
              These records are maintained for business and accounting
              purposes. Recording a payment in the application does
              not necessarily mean that AFM itself processes or
              transfers that payment.
            </p>

            <h3>1.5 Subscription Information</h3>
            <p>
              If you purchase a PRO subscription, subscription-related
              information may be processed to verify your purchase and
              manage access to premium features. Purchases are handled
              through Google Play Billing.
            </p>

            <h3>1.6 Support and Inquiry Information</h3>
            <p>
              If you contact us or submit an inquiry through the
              Mandal Portal, we may process the contact details and
              message information you provide to respond to your request.
            </p>

            <h3>1.7 Technical Information</h3>
            <p>
              Technical information such as application diagnostics,
              device or browser information, server logs and usage
              information may be processed where collected by the
              application, website or their service providers.
            </p>
          </PolicySection>

          <PolicySection id="use-information" title="2. How We Use Your Information">
            <p>
              Information collected through our Services may be used
              for the following purposes:
            </p>
            <ul>
              <li>To create and manage user accounts.</li>
              <li>To provide authentication and account access.</li>
              <li>To manage workshops, Murtikar profiles and managers.</li>
              <li>To create and maintain Mandal booking records.</li>
              <li>To record payments and calculate outstanding balances.</li>
              <li>To provide booking history and payment-related insights.</li>
              <li>To operate the Mandal Portal and display authorized public information.</li>
              <li>To process and verify subscription purchases.</li>
              <li>To respond to support requests and inquiries.</li>
              <li>To maintain, troubleshoot and improve our Services.</li>
              <li>To protect our Services against unauthorized access and misuse.</li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
          </PolicySection>

          <PolicySection id="mandal-portal" title="3. Mandal Portal and Public Information">
            <p>
              Art Finance Management includes a Mandal Portal through
              which visitors may explore selected Murtikar and workshop
              profiles and relevant booking information.
            </p>

            <p>
              Certain information may be publicly visible where it
              has been designated for public display, such as:
            </p>

            <ul>
              <li>Workshop or Murtikar name.</li>
              <li>Public workshop profile information.</li>
              <li>Publicly designated location details.</li>
              <li>Selected booking information intended for public viewing.</li>
            </ul>

            <p>
              Private account credentials, internal financial records,
              non-public payment transactions and sensitive personal
              information are not intended to be displayed through
              public profile pages.
            </p>

            <p>
              Users who publish workshop or profile information are
              responsible for ensuring that they are authorized to
              share that information.
            </p>
          </PolicySection>

          <PolicySection id="sharing-information" title="4. Sharing of Information">
            <p>
              We do not sell users' personal information.
              Information may be shared or processed in the following
              circumstances, where applicable:
            </p>

            <h3>4.1 Service Providers</h3>
            <p>
              We may use third-party service providers for application
              hosting, database infrastructure, website hosting,
              subscription verification and technical operations.
              These providers may process information as necessary
              to provide their services.
            </p>

            <h3>4.2 Google Play</h3>
            <p>
              Subscription purchases and related verification may
              involve Google Play and its associated billing services.
              Such processing is also subject to Google's applicable
              terms and privacy policies.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose information when required by applicable
              law, legal process or a valid request from an authorized
              government authority.
            </p>
          </PolicySection>

          <PolicySection id="data-security" title="5. Data Security">
            <p>
              We take reasonable measures to protect information
              handled through our Services against unauthorized access,
              alteration, disclosure or destruction.
            </p>

            <p>
              However, no method of electronic transmission or storage
              can be guaranteed to be completely secure. Users should
              also take appropriate precautions to protect their
              account credentials and devices.
            </p>
          </PolicySection>

          <PolicySection id="data-retention" title="6. Data Retention">
            <p>
              We retain information for as long as reasonably necessary
              to provide our Services, maintain business records,
              support account operations, resolve disputes and comply
              with applicable legal obligations.
            </p>

            <p>
              When information is no longer required for these purposes,
              it may be deleted or otherwise handled in accordance
              with applicable requirements and our data retention
              practices.
            </p>
          </PolicySection>

          <PolicySection id="account-deletion" title="7. Account Deletion">
            <p>
              Users may request deletion of their Art Finance
              Management accounts and associated personal information.
            </p>

            <p>
              To request account deletion, please follow the
              instructions on our dedicated Account Deletion page:
            </p>

            <p>
              <a
                href="/delete-account"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/delete-account');
                }}
              >
                Request Account Deletion
              </a>
            </p>

            <p>
              Certain information may need to be retained where
              required by applicable law or for legitimate record
              keeping purposes. Any such retention should be limited
              to the applicable requirement.
            </p>
          </PolicySection>

          <PolicySection id="user-rights" title="8. Your Privacy Rights">
            <p>
              Subject to applicable laws, you may contact us to:
            </p>

            <ul>
              <li>Request information about personal data associated with your account.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your account and associated information.</li>
              <li>Raise concerns regarding the handling of your information.</li>
            </ul>

            <p>
              We may need to verify your identity before processing
              certain requests.
            </p>
          </PolicySection>

          <PolicySection id="children-privacy" title="9. Children's Privacy">
            <p>
              Art Finance Management is designed primarily for
              business users, Murtikars, workshop owners and authorized
              managers.
            </p>

            <p>
              Our Services are not intended to knowingly collect
              personal information from children in violation of
              applicable laws. If you believe that a child has
              provided personal information through our Services,
              please contact us.
            </p>
          </PolicySection>

          <PolicySection id="third-party-links" title="10. Third-Party Websites and Services">
            <p>
              Our website or application may contain links to
              third-party websites or services, including Google Play.
              We are not responsible for the privacy practices or
              content of external services.
            </p>

            <p>
              We encourage users to review the privacy policies
              applicable to those third-party services.
            </p>
          </PolicySection>

          <PolicySection id="policy-changes" title="11. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time
              to reflect changes in our application, website,
              services or applicable requirements.
            </p>

            <p>
              Any updated version will be published on this page
              along with a revised "Last Updated" date.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="12. Contact Us">
            <p>
              If you have questions, concerns or requests regarding
              this Privacy Policy or the handling of your information,
              please contact us:
            </p>

            <p>
              <strong>Art Finance Management</strong>
            </p>

            <p>
              Email:{' '}
              <a href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
            </p>
          </PolicySection>
        </article>

        <button
          className="legal-back"
          onClick={() => navigate('/')}
        >
          ← Back to website
        </button>
      </main>

      <LegalFooter
        navigate={navigate}
        supportEmail={supportEmail}
      />
    </div>
  );
}

export function LegalFooter({ navigate, supportEmail }) {
  return (
    <footer className="legal-footer">
      <span>
        © {new Date().getFullYear()} Art Finance Management
      </span>

      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/mandal-portal')}>
          Mandal Portal
        </button>
        <button onClick={() => navigate('/delete-account')}>
          Delete Account
        </button>
        <a href={`mailto:${supportEmail}`}>Contact</a>
      </div>
    </footer>
  );
}
