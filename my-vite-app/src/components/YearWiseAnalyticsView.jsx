import React from 'react';
import { IconX, IconTrendingUp } from './Icons';

export default function YearWiseAnalyticsView({ yearlyStats = [], onClose, t, lang }) {
  const maxBookings = Math.max(...yearlyStats.map(s => s.totalBookings || 0), 10);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog container analytics-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{t.navAnalytics}</h2>
            <p className="modal-subtitle-text">
              {lang === 'mr' 
                ? 'डेटाबेसमधील सर्व कार्यशाळांची वर्षनिहाय नोंदवलेली बुकिंग संख्या.' 
                : 'Real-time year-wise bookings count recorded across all registered workshops.'}
            </p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <IconX size={20} />
          </button>
        </div>

        <div className="analytics-body">
          {/* Visual Trend Bars */}
          <div className="analytics-bars-container">
            <h4 className="chart-heading">
              <IconTrendingUp size={16} color="#F97316" />
              <span>{lang === 'mr' ? 'वर्षनिहाय एकूण बुकिंग आलेख' : 'Total Bookings by Year'}</span>
            </h4>

            {yearlyStats.length === 0 ? (
              <p className="text-muted" style={{ padding: '20px', textAlign: 'center' }}>
                {lang === 'mr' ? 'अद्याप बुकिंग नोंद नाही' : 'No booking records available'}
              </p>
            ) : (
              <div className="analytics-bars-display">
                {yearlyStats.map(stat => {
                  const percent = Math.max(10, Math.round(((stat.totalBookings || 0) / maxBookings) * 100));
                  return (
                    <div key={stat.year} className="analytics-bar-col">
                      <span className="analytics-bar-count">{stat.totalBookings}</span>
                      <div className="analytics-bar-track">
                        <div 
                          className="analytics-bar-fill current"
                          style={{ height: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="analytics-year-tag">{stat.year}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Real Breakdown Table */}
          <div className="analytics-table-wrap">
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>{lang === 'mr' ? 'वर्ष' : 'Year'}</th>
                  <th>{lang === 'mr' ? 'नोंदवलेली एकूण बुकिंग संख्या' : 'Total Bookings Recorded'}</th>
                  <th>{lang === 'mr' ? 'नोंद असणाऱ्या कार्यशाळा' : 'Workshops with Bookings'}</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map(stat => (
                  <tr key={stat.year}>
                    <td>
                      <strong className="year-highlight">{stat.year}</strong>
                    </td>
                    <td>
                      <span className="bold-count">{stat.totalBookings} Mandals</span>
                    </td>
                    <td>
                      <span>{stat.workshopsReporting || 1} Workshops</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-cancel" onClick={onClose}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
