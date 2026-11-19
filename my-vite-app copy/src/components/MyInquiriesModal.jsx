import React from 'react';
import { IconX, IconPhone, IconCalendar, IconCheck, IconBriefcase } from './Icons';

export default function MyInquiriesModal({ inquiries, onClose, t, lang }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog container small-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{t.navMyInquiries} ({inquiries.length})</h3>
            <p className="modal-subtitle-text">
              {lang === 'mr' 
                ? 'आपण विविध कार्यशाळांना पाठवलेल्या चौकशीची स्थिती व तपशील.' 
                : 'Track the quotes & callback requests you have dispatched to workshops.'}
            </p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <IconX size={20} />
          </button>
        </div>

        <div className="inquiries-list-body">
          {inquiries.length === 0 ? (
            <div className="empty-inquiries-box">
              <IconBriefcase size={36} color="#94A3B8" />
              <p>{lang === 'mr' ? 'अद्याप कोणतीही चौकशी पाठवलेली नाही.' : 'No inquiries dispatched yet. Click "Request Quote" on any murtikar card.'}</p>
            </div>
          ) : (
            <div className="inquiries-cards-stack">
              {inquiries.map(inq => (
                <div key={inq.id} className="inquiry-item-card">
                  <div className="inquiry-item-header">
                    <div>
                      <strong className="inq-workshop-name">{inq.workshopName}</strong>
                      <span className="inq-artist-name">({inq.murtikarName})</span>
                    </div>
                    <span className="inq-status-badge">
                      <IconCheck size={12} color="#10B981" />
                      <span>{inq.status}</span>
                    </span>
                  </div>

                  <div className="inq-details-grid">
                    <div>
                      <span className="inq-label">{lang === 'mr' ? 'मंडळाचे नाव:' : 'Mandal Name:'}</span>
                      <strong>{inq.mandalName}</strong>
                    </div>
                    <div>
                      <span className="inq-label">{lang === 'mr' ? 'उंची व वर्ष:' : 'Height & Season:'}</span>
                      <strong>{inq.murtiHeight} ({inq.targetYear})</strong>
                    </div>
                    <div>
                      <span className="inq-label">{lang === 'mr' ? 'प्रतिनिधी:' : 'Representative:'}</span>
                      <span>{inq.contactPerson} ({inq.phone})</span>
                    </div>
                    <div>
                      <span className="inq-label">{lang === 'mr' ? 'तारीख:' : 'Date:'}</span>
                      <span>{new Date(inq.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {inq.notes && (
                    <div className="inq-notes-block">
                      <span className="inq-label">{lang === 'mr' ? 'विशेष सूचना:' : 'Notes:'}</span>
                      <p>{inq.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
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

