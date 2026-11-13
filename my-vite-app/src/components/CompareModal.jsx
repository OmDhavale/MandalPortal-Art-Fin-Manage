import React from 'react';
import { IconX, IconPhone, IconWhatsApp } from './Icons';

export default function CompareModal({ comparedList, onClose, onRemove, onClear, t, lang, onOpenInquiry }) {
  if (comparedList.length === 0) {
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-dialog container small-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{t.compareTitle}</h3>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              <IconX size={20} />
            </button>
          </div>
          <div className="empty-compare-body">
            <p className="empty-compare-text">{t.compareEmpty}</p>
            <button type="button" className="btn-primary-view" onClick={onClose}>
              {lang === 'mr' ? 'मूर्तिकार यादीकडे जा' : 'Browse Murtikars'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog container compare-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{t.compareTitle} ({comparedList.length})</h2>
            <p className="modal-subtitle-text">{t.compareSub}</p>
          </div>
          <div className="compare-header-actions">
            <button type="button" className="clear-btn" onClick={onClear}>
              {t.clearCompare}
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              <IconX size={20} />
            </button>
          </div>
        </div>

        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="feature-col-th">{lang === 'mr' ? 'तपशील' : 'Information'}</th>
                {comparedList.map(m => (
                  <th key={m.id} className="murtikar-col-th">
                    <div className="th-header-box">
                      <button 
                        type="button" 
                        className="remove-compare-pill"
                        onClick={() => onRemove(m.id)}
                        title="Remove"
                      >
                        <IconX size={12} />
                      </button>
                      <strong className="th-workshop-title">{m.workshopName}</strong>
                      <span className="th-artist-title">{m.murtikarName}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Location */}
              <tr>
                <td className="row-label">{t.filterCity} & {lang === 'mr' ? 'परिसर' : 'Area'}</td>
                {comparedList.map(m => (
                  <td key={m.id}>
                    {[m.location?.area, m.location?.city].filter(Boolean).join(', ') || '—'}
                  </td>
                ))}
              </tr>

              {/* Murtikar Contact */}
              <tr>
                <td className="row-label">{t.murtikarName} {lang === 'mr' ? 'संपर्क' : 'Contact'}</td>
                {comparedList.map(m => (
                  <td key={m.id}>
                    {m.phone ? (
                      <div className="compare-contact-row">
                        <span>{m.phone}</span>
                        <a href={`tel:${m.phone.replace(/[^0-9+]/g, '')}`} className="compare-call-btn">
                          <IconPhone size={11} /> Call
                        </a>
                      </div>
                    ) : '—'}
                  </td>
                ))}
              </tr>

              {/* Total Bookings */}
              <tr>
                <td className="row-label">{t.totalBookings}</td>
                {comparedList.map(m => {
                  const count = m.totalBookings || m.yearlyBookings?.reduce((s, b) => s + (b.bookingsCount || b.bookings || 0), 0) || 0;
                  return (
                    <td key={m.id}>
                      <strong className="booking-total-highlight">{count} Bookings</strong>
                    </td>
                  );
                })}
              </tr>

              {/* Year-Wise Bookings */}
              <tr>
                <td className="row-label">
                  <strong>{t.yearlyBookingsHeading}</strong>
                </td>
                {comparedList.map(m => {
                  const ybList = m.yearlyBookings || [];
                  return (
                    <td key={m.id}>
                      {ybList.length === 0 ? (
                        <span className="text-muted">No bookings recorded</span>
                      ) : (
                        <div className="compare-bookings-box">
                          {ybList.map(yb => {
                            const count = yb.bookingsCount !== undefined ? yb.bookingsCount : (yb.bookings || 0);
                            return (
                              <div key={yb.year} className="compare-year-badge">
                                <strong>{yb.year}:</strong> {count} bookings
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* Managers Team */}
              <tr>
                <td className="row-label">
                  <strong>{t.managersHeading}</strong>
                </td>
                {comparedList.map(m => {
                  const mgrList = m.managers || [];
                  return (
                    <td key={m.id}>
                      {mgrList.length === 0 ? (
                        <span className="text-muted">No managers</span>
                      ) : (
                        <div className="compare-managers-list">
                          {mgrList.map(mgr => (
                            <div key={mgr.id || mgr._id} className="compare-mgr-item">
                              <strong className="mgr-name-sm">{mgr.name}</strong>
                              <span className="mgr-phone-sm">{mgr.phone}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* Murti Sizes */}
              <tr>
                <td className="row-label">{t.murtiSizes}</td>
                {comparedList.map(m => {
                  const sizes = m.murtiSizes || [];
                  return (
                    <td key={m.id}>
                      {sizes.length > 0 ? sizes.join(', ') : '—'}
                    </td>
                  );
                })}
              </tr>

              {/* Past Mandals */}
              <tr>
                <td className="row-label">{t.pastMandalsServed}</td>
                {comparedList.map(m => {
                  const pMandals = m.pastMandals || [];
                  return (
                    <td key={m.id}>
                      {pMandals.length > 0 ? (
                        <div className="compare-mandals-list">
                          {pMandals.slice(0, 3).map((pm, i) => (
                            <span key={i} className="compare-mandal-tag">
                              {pm.ganpatiTitle || pm.name}
                            </span>
                          ))}
                          {pMandals.length > 3 && <span>+{pMandals.length - 3} more</span>}
                        </div>
                      ) : '—'}
                    </td>
                  );
                })}
              </tr>

              {/* Actions */}
              <tr>
                <td className="row-label">{lang === 'mr' ? 'थेट संपर्क' : 'Action'}</td>
                {comparedList.map(m => (
                  <td key={m.id}>
                    <button
                      type="button"
                      className="btn-submit-inquire sm"
                      onClick={() => {
                        onClose();
                        onOpenInquiry(m);
                      }}
                    >
                      <span>{t.inquireBtn}</span>
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
