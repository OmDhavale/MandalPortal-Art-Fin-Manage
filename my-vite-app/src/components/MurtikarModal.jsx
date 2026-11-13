import React, { useState } from 'react';
import {
  IconX,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
  IconUsers,
  IconTrendingUp,
  IconSparkles,
  IconBriefcase
} from './Icons';

export default function MurtikarModal({ murtikar, onClose, t, lang, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('bookings');

  if (!murtikar) return null;

  const yearlyBookings = murtikar.yearlyBookings || [];
  const managers = murtikar.managers || [];
  const pastMandals = murtikar.pastMandals || [];
  const murtiSizes = murtikar.murtiSizes || [];
  const totalBookings = murtikar.totalBookings || yearlyBookings.reduce((sum, b) => sum + (b.bookingsCount || b.bookings || 0), 0);

  const cleanPhone = murtikar.phone ? murtikar.phone.replace(/[^0-9+]/g, '') : '';
  const waPhone = murtikar.phone ? murtikar.phone.replace(/[^0-9]/g, '') : '';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-title-row">
              <h2 className="modal-title">{murtikar.workshopName}</h2>
              {murtikar.plan === 'PRO' && (
                <span className="plan-badge-pro">PRO Workshop</span>
              )}
            </div>

            <div className="modal-sub-row">
              <span className="murtikar-highlight">{t.murtikarName}: <strong>{murtikar.murtikarName}</strong></span>
              {(murtikar.location?.area || murtikar.location?.city) && (
                <>
                  <span className="dot-sep">·</span>
                  <span className="loc-text"><IconMapPin size={13} /> {[murtikar.location.area, murtikar.location.city].filter(Boolean).join(', ')}</span>
                </>
              )}
              {murtikar.phone && (
                <>
                  <span className="dot-sep">·</span>
                  <span className="phone-text"><IconPhone size={13} /> {murtikar.phone}</span>
                </>
              )}
            </div>
          </div>

          <div className="modal-header-right">
            <button
              type="button"
              className="modal-action-inquire"
              onClick={() => {
                onClose();
                onOpenInquiry(murtikar);
              }}
            >
              <IconBriefcase size={15} />
              <span>{t.inquireBtn}</span>
            </button>

            <button type="button" className="modal-close-btn" onClick={onClose}>
              <IconX size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="modal-tabs-bar">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <IconTrendingUp size={16} />
            <span>{t.tabBookings} ({yearlyBookings.length} {lang === 'mr' ? 'वर्षे' : 'Years'})</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'managers' ? 'active' : ''}`}
            onClick={() => setActiveTab('managers')}
          >
            <IconUsers size={16} />
            <span>{t.tabManagers} ({managers.length})</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'mandals' ? 'active' : ''}`}
            onClick={() => setActiveTab('mandals')}
          >
            <IconSparkles size={16} />
            <span>{t.tabMandals} ({pastMandals.length})</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="modal-tab-content">

          {/* TAB 1: YEAR-WISE BOOKINGS TABLE */}
          {activeTab === 'bookings' && (
            <div className="tab-pane-bookings">
              {/* Summary KPIs */}
              <div className="kpi-cards-grid three-col">
                <div className="kpi-card">
                  <span className="kpi-label">{lang === 'mr' ? 'एकूण नोंदवलेली बुकिंग' : 'Total Bookings Recorded'}</span>
                  <strong className="kpi-number">{totalBookings}</strong>
                  <span className="kpi-sub">Across all database records</span>
                </div>
                <div className="kpi-card">
                  <span className="kpi-label">{lang === 'mr' ? 'नोंदवलेली वर्षे' : 'Recorded Seasons'}</span>
                  <strong className="kpi-number">{yearlyBookings.length}</strong>
                  <span className="kpi-sub">{yearlyBookings.map(y => y.year).join(', ') || 'No years'}</span>
                </div>
                <div className="kpi-card">
                  <span className="kpi-label">{lang === 'mr' ? 'मूर्तींचे आकार' : 'Distinct Murti Sizes'}</span>
                  <strong className="kpi-number">{murtiSizes.length}</strong>
                  <span className="kpi-sub">{murtiSizes.slice(0, 3).join(', ') || 'Standard sizes'}</span>
                </div>
              </div>

              {/* Year-Wise Detailed Table */}
              <div className="table-responsive-wrap">
                <table className="yearly-stats-table">
                  <thead>
                    <tr>
                      <th>{lang === 'mr' ? 'वर्ष' : 'Year'}</th>
                      <th>{lang === 'mr' ? 'बुकिंग संख्या' : 'Bookings Count'}</th>
                      <th>{lang === 'mr' ? 'सक्रिय बुकिंग' : 'Active'}</th>
                      <th>{lang === 'mr' ? 'पूर्ण झालेली' : 'Completed'}</th>
                      <th>{lang === 'mr' ? 'मूर्तींचे आकार' : 'Murti Sizes'}</th>
                      <th>{lang === 'mr' ? 'नोंदवलेली मंडळे' : 'Client Mandals'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyBookings.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '24px' }}>
                          {lang === 'mr' ? 'कोणतीही बुकिंग नोंद उपलब्ध नाही.' : 'No booking entries recorded in database.'}
                        </td>
                      </tr>
                    ) : (
                      yearlyBookings.map(yb => {
                        const count = yb.bookingsCount !== undefined ? yb.bookingsCount : (yb.bookings || 0);
                        return (
                          <tr key={yb.year}>
                            <td>
                              <span className="year-badge active">{yb.year}</span>
                            </td>
                            <td>
                              <strong className="booking-count-num">{count}</strong>
                            </td>
                            <td>{yb.activeBookings || 0}</td>
                            <td>{yb.completedBookings || 0}</td>
                            <td>
                              {yb.murtiSizes && yb.murtiSizes.length > 0
                                ? yb.murtiSizes.join(', ')
                                : '—'}
                            </td>
                            <td>
                              {yb.mandals && yb.mandals.length > 0 ? (
                                <div className="year-mandals-list">
                                  {yb.mandals.map((m, idx) => (
                                    <span key={idx} className="year-mandal-chip">
                                      {m.ganpatiTitle} {m.area ? `(${m.area})` : ''}
                                    </span>
                                  ))}
                                </div>
                              ) : '—'}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: MANAGERS & TEAM */}
          {activeTab === 'managers' && (
            <div className="tab-pane-managers">
              {/* Master Sculptor (Owner) Card */}
              <div className="owner-contact-card">
                <div className="owner-avatar">
                  <IconUsers size={24} color="#EA580C" />
                </div>
                <div className="owner-details">
                  <span className="owner-title-badge">WORKSHOP OWNER & MURTIKAR</span>
                  <h3 className="owner-full-name">{murtikar.murtikarName}</h3>
                  <p className="owner-desc">
                    {murtikar.workshopName} · {[murtikar.location?.area, murtikar.location?.city].filter(Boolean).join(', ')}
                  </p>
                  {murtikar.phone && (
                    <div className="owner-contact-row">
                      <a href={`tel:${cleanPhone}`} className="btn-call-direct">
                        <IconPhone size={14} />
                        <span>{murtikar.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${waPhone}?text=Namaste%20${encodeURIComponent(murtikar.murtikarName)},%20our%20mandal%20wants%20to%20discuss%20our%20Ganesh%20Murti%20booking.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-wa-direct"
                      >
                        <IconWhatsApp size={15} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Managers Grid */}
              <h4 className="managers-grid-heading">{t.managersHeading} ({managers.length})</h4>

              {managers.length === 0 ? (
                <div className="no-managers-box">
                  <p>{lang === 'mr' ? 'या कार्यशाळेत अद्याप व्यवस्थापक जोडलेले नाहीत. कृपया मूर्तिकारांशी थेट संपर्क साधा.' : 'No managers registered under this workshop. Please contact the Murtikar directly.'}</p>
                </div>
              ) : (
                <div className="managers-full-grid">
                  {managers.map(mgr => {
                    const mgrCleanPhone = mgr.phone ? mgr.phone.replace(/[^0-9+]/g, '') : '';
                    const mgrWaPhone = mgr.phone ? mgr.phone.replace(/[^0-9]/g, '') : '';
                    return (
                      <div key={mgr.id || mgr._id} className="manager-full-card">
                        <div className="mgr-avatar-circle">
                          <IconUsers size={20} color="#0284C7" />
                        </div>
                        <div className="mgr-full-body">
                          <span className="mgr-role-badge">Manager</span>
                          <h4 className="mgr-name-title">{mgr.name}</h4>
                          <p className="mgr-phone-display">
                            <IconPhone size={13} color="#64748B" />
                            <strong>{mgr.phone}</strong>
                          </p>

                          {mgr.phone && (
                            <div className="mgr-buttons-row">
                              <a
                                href={`tel:${mgrCleanPhone}`}
                                className="mgr-action-btn call"
                              >
                                <IconPhone size={13} />
                                <span>{t.callNow}</span>
                              </a>
                              <a
                                href={`https://wa.me/${mgrWaPhone}?text=Namaste%20${encodeURIComponent(mgr.name)},%20we%20are%20inquiring%20from%20our%20Ganesh%20Mandal.`}
                                target="_blank"
                                rel="noreferrer"
                                className="mgr-action-btn wa"
                              >
                                <IconWhatsApp size={14} />
                                <span>{t.whatsappNow}</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PAST CLIENT MANDALS */}
          {activeTab === 'mandals' && (
            <div className="tab-pane-mandals">
              <h4 className="overview-subhead">
                {t.pastMandalsServed} ({pastMandals.length})
              </h4>

              {pastMandals.length === 0 ? (
                <div className="no-bookings-box">
                  <p>
                    {lang === 'mr'
                      ? 'अद्याप मंडळांची नोंद उपलब्ध नाही.'
                      : 'No mandals recorded in database for this workshop.'}
                  </p>
                </div>
              ) : (
                <div className="mandals-scroll-container">
                  <div className="past-mandals-grid">
                    {pastMandals.map((mandal, i) => (
                      <div key={i} className="past-mandal-card">
                        <div className="mandal-icon-badge">🪔</div>
                        <div className="mandal-info">
                          <strong className="mandal-name-text">
                            {mandal.ganpatiTitle || mandal.name}
                          </strong>

                          {mandal.mandalName && (
                            <span className="mandal-sub-name">
                              {mandal.mandalName}
                            </span>
                          )}

                          <span className="mandal-meta-text">
                            {[mandal.area, mandal.city].filter(Boolean).join(', ')}
                            {mandal.years && mandal.years.length > 0 &&
                              ` · Seasons: ${Array.isArray(mandal.years)
                                ? mandal.years.join(', ')
                                : mandal.years
                              }`}
                            {mandal.murtiSize && ` · Size: ${mandal.murtiSize}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Modal Footer */}
          <div className="modal-footer">
            <div className="footer-price-info">
              <span className="price-label">{murtikar.workshopName}</span>
              <span className="price-note">({totalBookings} Total Bookings)</span>
            </div>

            <div className="footer-actions-group">
              <button type="button" className="btn-cancel" onClick={onClose}>
                {t.close}
              </button>
              <button
                type="button"
                className="btn-submit-inquire"
                onClick={() => {
                  onClose();
                  onOpenInquiry(murtikar);
                }}
              >
                <IconBriefcase size={15} />
                <span>{t.inquireBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
