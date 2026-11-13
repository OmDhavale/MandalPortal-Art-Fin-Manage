import React from 'react';
import { IconSearch, IconX, IconChevronDown } from './Icons';

export default function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
  cities = [],
  sortBy,
  setSortBy,
  onReset,
  totalResults,
  t,
  lang
}) {
  const isFiltered = searchQuery || selectedCity !== 'All';

  return (
    <section className="search-filter-section container">
      {/* Search Bar */}
      <div className="search-bar-wrap">
        <div className="search-icon-wrapper">
          <IconSearch size={20} color="#F97316" />
        </div>
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
        />
        {searchQuery && (
          <button 
            type="button" 
            className="clear-search-btn"
            onClick={() => setSearchQuery('')}
            title="Clear search"
          >
            <IconX size={16} />
          </button>
        )}
      </div>

      {/* City Chips & Sort Row */}
      <div className="filter-controls-row compact">
        {/* City selector */}
        <div className="city-chips-scroll">
          <span className="filter-chip-label">{t.filterCity}:</span>
          <div className="city-chips-list">
            {cities.map(city => (
              <button
                key={city}
                type="button"
                className={`city-chip ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === 'All' ? (lang === 'mr' ? 'सर्व शहरे' : 'All Cities') : city}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="sort-controls-right">
          <div className="select-box sort-box">
            <label className="select-label">{t.sortBy}</label>
            <div className="select-wrapper">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="custom-select"
              >
                <option value="bookingsDesc">{t.sortBookingsDesc}</option>
                <option value="nameAsc">{t.sortNameAsc}</option>
              </select>
              <IconChevronDown size={14} className="select-chevron" />
            </div>
          </div>

          {/* Reset button if active */}
          {isFiltered && (
            <button 
              type="button" 
              className="reset-filters-btn"
              onClick={onReset}
            >
              <IconX size={14} />
              <span>{t.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="results-summary-row">
        <span className="results-badge">
          <strong>{totalResults}</strong> {t.resultsCount}
        </span>
        <span className="results-hint">
          {lang === 'mr' ? 'वर्षनिहाय बुकिंग व व्यवस्थापक तपशीलासाठी कार्डवर क्लिक करा' : 'Click on any card to view detailed year-wise bookings & managers'}
        </span>
      </div>
    </section>
  );
}
