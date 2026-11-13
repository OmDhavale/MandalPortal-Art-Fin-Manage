import React from 'react';
import {
  IconMapPin,
  IconPhone,
  IconWhatsApp,
  IconUsers,
  IconTrendingUp,
  IconCompare,
  IconCheck,
  IconBriefcase
} from './Icons';

export default function MurtikarCard({
  murtikar,
  t,
  lang,
  onSelect,
  isCompared,
  onToggleCompare,
  onOpenInquiry
}) {
  const yearlyBookings = murtikar.yearlyBookings || [];
  const managers = murtikar.managers || [];
  const pastMandals = murtikar.pastMandals || [];
  const murtiSizes = murtikar.murtiSizes || [];

  const totalBookings = murtikar.totalBookings || yearlyBookings.reduce((sum, b) => sum + (b.bookingsCount || b.bookings || 0), 0);

  // Max bookings for bar scaling
  const maxBookingVal = Math.max(...yearlyBookings.map(b => b.bookingsCount || b.bookings || 0), 10);

  const cleanPhone = murtikar.phone ? murtikar.phone.replace(/[^0-9+]/g, '') : '';
  const waPhone = murtikar.phone ? murtikar.phone.replace(/[^0-9]/g, '') : '';

  return (
    <article className="murtikar-card">
      {/* 1. WORKSHOP NAME & MURTIKAR DETAILS */}
      <div className="card-top-header">
        <div className="workshop-identity">
          <div className="workshop-avatar">
            <span className="avatar-initials">{murtikar.workshopName ? murtikar.workshopName.charAt(0) : 'M'}</span>
          </div>
          <div className="workshop-header-text">
            <div className="title-row">
              <h3 className="workshop-name-text">{murtikar.workshopName}</h3>
              {murtikar.plan === 'PRO' && (
                <span className="plan-badge-pro">PRO</span>
              )}
            </div>

            {/* Murtikar's Own Name with direct Call & WhatsApp buttons */}
            <div className="murtikar-name-row">
              <span className="murtikar-role-label">{t.murtikarName}:</span>
              <strong className="murtikar-artist-name">{murtikar.murtikarName}</strong>

              {/* Direct Murtikar Contact */}
              {murtikar.phone && (
                <div className="murtikar-quick-contact">
                  <a 
                    href={`tel:${cleanPhone}`} 
                    className="contact-pill-btn phone" 
                    title={`Call Murtikar: ${murtikar.phone}`}
                  >
                    <IconPhone size={12} color="#0284C7" />
                    <span>{murtikar.phone}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${waPhone}?text=Namaste%20${encodeURIComponent(murtikar.murtikarName)},%20we%20are%20contacting%20you%20from%20our%20Ganesh%20Mandal.`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="contact-pill-btn whatsapp" 
                    title="WhatsApp Murtikar"
                  >
                    <IconWhatsApp size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Total Bookings pill */}
        <div className="card-top-right">
          <span className="total-bookings-pill">
            <strong>{totalBookings}</strong> {t.totalBookings}
          </span>
        </div>
      </div>

      {/* Workshop Location */}
      {(murtikar.location?.area || murtikar.location?.city) && (
        <div className="card-location-row">
          <div className="location-item">
            <IconMapPin size={14} color="#EA580C" />
            <span>{[murtikar.location.area, murtikar.location.city].filter(Boolean).join(', ')}</span>
          </div>
          {murtikar.registeredDate && (
            <div className="registered-item">
              <span>Since {new Date(murtikar.registeredDate).getFullYear()}</span>
            </div>
          )}
        </div>
      )}

      <div className="card-divider"></div>

      {/* 2. NUMBER OF BOOKINGS YEAR-WISE */}
      <div className="yearly-bookings-section">
        <div className="section-title-row">
          <div className="title-with-icon">
            <IconTrendingUp size={15} color="#F97316" />
            <h4 className="section-heading">{t.yearlyBookingsHeading}</h4>
          </div>
          <span className="years-count-text">
            {yearlyBookings.length} {lang === 'mr' ? 'वर्षे नोंद' : 'Seasons'}
          </span>
        </div>

        {yearlyBookings.length === 0 ? (
          <div className="no-bookings-box">
            <span>{lang === 'mr' ? 'अद्याप बुकिंग नोंद नाही' : 'No bookings recorded yet'}</span>
          </div>
        ) : (
          <div className="yearly-bars-grid">
            {yearlyBookings.map(yb => {
              const count = yb.bookingsCount !== undefined ? yb.bookingsCount : (yb.bookings || 0);
              const heightPercent = Math.max(15, Math.round((count / maxBookingVal) * 100));
              return (
                <div key={yb.year} className="year-stat-col">
                  <div className="bar-track">
                    <div 
                      className="bar-fill fill-orange"
                      style={{ height: `${heightPercent}%` }}
                      title={`Year ${yb.year}: ${count} bookings`}
                    >
                      <span className="bar-val">{count}</span>
                    </div>
                  </div>
                  <span className="year-label">{yb.year}</span>
                  <span className="year-sub-info">{count} {lang === 'mr' ? 'मंडळे' : 'bkg'}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="card-divider"></div>

      {/* 3. HIS MANAGERS */}
      <div className="managers-section">
        <div className="section-title-row">
          <div className="title-with-icon">
            <IconUsers size={15} color="#0284C7" />
            <h4 className="section-heading">{t.managersHeading}</h4>
          </div>
          <span className="managers-count-badge">
            {managers.length} {t.managersCount}
          </span>
        </div>

        {managers.length === 0 ? (
          <div className="no-managers-box">
            <span>{lang === 'mr' ? 'कोणताही व्यवस्थापक जोडलेला नाही (मूर्तिकार थेट संपर्क)' : 'No managers added (Contact Murtikar directly)'}</span>
          </div>
        ) : (
          <div className="managers-cards-list">
            {managers.map(mgr => {
              const mgrCleanPhone = mgr.phone ? mgr.phone.replace(/[^0-9+]/g, '') : '';
              const mgrWaPhone = mgr.phone ? mgr.phone.replace(/[^0-9]/g, '') : '';
              return (
                <div key={mgr.id || mgr._id} className="manager-chip-item">
                  <div className="manager-info-col">
                    <strong className="manager-name">{mgr.name}</strong>
                    <div className="mgr-phone-text">
                      <IconPhone size={11} color="#64748B" />
                      <span>{mgr.phone}</span>
                    </div>
                  </div>

                  {/* Manager Direct Contact Buttons */}
                  <div className="manager-actions">
                    {mgr.phone && (
                      <>
                        <a 
                          href={`tel:${mgrCleanPhone}`} 
                          className="mgr-contact-btn phone" 
                          title={`Call ${mgr.name}`}
                        >
                          <IconPhone size={13} color="#0284C7" />
                        </a>
                        <a 
                          href={`https://wa.me/${mgrWaPhone}?text=Namaste%20${encodeURIComponent(mgr.name)},%20we%20are%20inquiring%20from%20our%20Ganesh%20Mandal.`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="mgr-contact-btn whatsapp" 
                          title={`WhatsApp ${mgr.name}`}
                        >
                          <IconWhatsApp size={14} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Murti Sizes from Bookings */}
      {murtiSizes.length > 0 && (
        <div className="murti-sizes-preview">
          <span className="sizes-label">{t.murtiSizes}:</span>
          <div className="sizes-chips-row">
            {murtiSizes.slice(0, 4).map((size, idx) => (
              <span key={idx} className="size-chip">{size}</span>
            ))}
            {murtiSizes.length > 4 && (
              <span className="size-chip more">+{murtiSizes.length - 4}</span>
            )}
          </div>
        </div>
      )}

      {/* Past Mandals Served from Bookings */}
      {pastMandals.length > 0 && (
        <div className="past-mandals-preview">
          <span className="past-mandals-label">{t.pastMandalsServed}:</span>
          <span className="past-mandals-names">
            {pastMandals.slice(0, 3).map(m => m.ganpatiTitle || m.name).join(' · ')}
            {pastMandals.length > 3 ? ` (+${pastMandals.length - 3} more)` : ''}
          </span>
        </div>
      )}

      {/* Card Action Buttons */}
      <div className="card-footer-actions">
        <button
          type="button"
          className="btn-primary-view"
          onClick={() => onSelect(murtikar)}
        >
          <span>{t.viewProfileBtn}</span>
        </button>

        <button
          type="button"
          className={`btn-compare ${isCompared ? 'active' : ''}`}
          onClick={() => onToggleCompare(murtikar)}
          title="Compare"
        >
          {isCompared ? <IconCheck size={14} color="#16A34A" /> : <IconCompare size={14} />}
          <span>{isCompared ? t.comparedBtn : t.compareBtn}</span>
        </button>

        <button
          type="button"
          className="btn-inquire-direct"
          onClick={() => onOpenInquiry(murtikar)}
          title="Send Inquiry"
        >
          <IconBriefcase size={14} />
          <span>{t.inquireBtn}</span>
        </button>
      </div>
    </article>
  );
}
