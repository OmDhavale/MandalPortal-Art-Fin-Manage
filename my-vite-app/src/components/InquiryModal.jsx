import React, { useState } from 'react';
import { IconX, IconCheck, IconBriefcase, IconPhone, IconMapPin } from './Icons';

export default function InquiryModal({ murtikar, onClose, onSubmitSuccess, t, lang }) {
  const [formData, setFormData] = useState({
    mandalName: '',
    contactPerson: '',
    phone: '',
    cityArea: '',
    murtiHeight: '8-12 ft',
    targetYear: '2026',
    material: '100% Shadu Mati (Eco-Friendly)',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.mandalName.trim() || !formData.contactPerson.trim() || !formData.phone.trim()) {
      alert(lang === 'mr' ? 'कृपया आवश्यक सर्व माहिती भरा.' : 'Please fill all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await onSubmitSuccess({
        murtikarId: murtikar.id,
        workshopName: murtikar.workshopName,
        murtikarName: murtikar.murtikarName,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      alert('Error submitting inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const workshopTitle = lang === 'mr' ? (murtikar.workshopNameMr || murtikar.workshopName) : murtikar.workshopName;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog container small-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{t.inquiryFormTitle} {workshopTitle}</h3>
            <p className="modal-subtitle-text">{t.inquiryFormSub}</p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <IconX size={20} />
          </button>
        </div>

        {success ? (
          <div className="inquiry-success-view">
            <div className="success-icon-wrap">
              <IconCheck size={36} color="#10B981" />
            </div>
            <h4 className="success-heading">{lang === 'mr' ? 'चौकशी यशस्वी!' : 'Inquiry Sent Successfully!'}</h4>
            <p className="success-message">{t.inquirySuccessMsg}</p>
            <p className="success-note">
              {lang === 'mr' 
                ? 'कार्यशाळा व्यवस्थापक आपल्या मोबाईलवर लवकरच संपर्क साधतील.' 
                : 'The workshop managers will reach out to your contact number shortly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="inquiry-form-body">
            {/* Mandal Name */}
            <div className="form-group">
              <label className="form-label">{t.mandalNameLabel}</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder={t.mandalNamePlaceholder}
                value={formData.mandalName}
                onChange={(e) => setFormData({ ...formData, mandalName: e.target.value })}
              />
            </div>

            {/* Representative Name & Phone side by side */}
            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">{t.contactPersonLabel}</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder={t.contactPersonPlaceholder}
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                />
              </div>

              <div className="form-group flex-1">
                <label className="form-label">{t.phoneLabel}</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="form-input"
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Location & Murti Height */}
            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">{t.cityAreaLabel}</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder={t.cityAreaPlaceholder}
                  value={formData.cityArea}
                  onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                />
              </div>

              <div className="form-group flex-1">
                <label className="form-label">{t.murtiSizeLabel}</label>
                <select
                  className="form-select"
                  value={formData.murtiHeight}
                  onChange={(e) => setFormData({ ...formData, murtiHeight: e.target.value })}
                >
                  <option value="3-5 ft">Small (3 - 5 ft)</option>
                  <option value="6-8 ft">Medium (6 - 8 ft)</option>
                  <option value="9-12 ft">Sarvajanik (9 - 12 ft)</option>
                  <option value="13-16 ft">Grand (13 - 16 ft)</option>
                  <option value="17-22+ ft">Mega (17 - 22+ ft)</option>
                </select>
              </div>
            </div>

            {/* Target Year & Material */}
            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">{t.targetYearLabel}</label>
                <select
                  className="form-select"
                  value={formData.targetYear}
                  onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                >
                  <option value="2026">2026 (Upcoming Festival)</option>
                  <option value="2027">2027 (Advance Booking)</option>
                </select>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">{t.materialPreferenceLabel}</label>
                <select
                  className="form-select"
                  value={formData.material}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                >
                  <option value="100% Shadu Mati (Eco-Friendly)">100% Shadu Mati (Eco-Friendly)</option>
                  <option value="Plaster of Paris (POP)">Plaster of Paris (POP)</option>
                  <option value="Recycled Paper Pulp (कागदी लगदा)">Recycled Paper Pulp (कागदी लगदा)</option>
                  <option value="Open to recommendations">Open to sculptor recommendations</option>
                </select>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="form-group">
              <label className="form-label">{t.additionalNotesLabel}</label>
              <textarea
                rows="3"
                className="form-textarea"
                placeholder={t.additionalNotesPlaceholder}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              ></textarea>
            </div>

            {/* Modal Actions */}
            <div className="form-actions-row">
              <button type="button" className="btn-cancel" onClick={onClose}>
                {t.close}
              </button>
              <button type="submit" disabled={submitting} className="btn-submit-inquire">
                <IconBriefcase size={15} />
                <span>{submitting ? t.submitting : t.submitInquiryBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

