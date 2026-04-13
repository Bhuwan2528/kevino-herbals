import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SortBar.css';

const SortBar = ({ totalResults, onSearchChange, onSortChange, onToggleMobileFilters, sortOption }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearchChange]);

  return (
    <div className="sort-bar">
      <div className="sort-bar-left">
        <button className="btn-mobile-filters" onClick={onToggleMobileFilters}>
          Filter
        </button>
        <span className="results-count">
          Showing <strong>{totalResults}</strong> results
        </span>
      </div>

      <div className="sort-bar-right">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-wrapper">
          <select 
            className="sort-select" 
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
