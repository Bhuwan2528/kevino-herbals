import React from 'react';
import './Filters.css';
import { categories, subCategories } from '../../../data/products';

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  priceRange,
  setPriceRange,
  onClearFilters,
  isOpen,
  onClose
}) => {
  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 1);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 1);
    setPriceRange([priceRange[0], value]);
  };

  return (
    <>
      <div className={`filters-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`filters-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="filters-header">
          <h3 className="filters-title">Filters</h3>
          <button className="clear-filters-btn" onClick={onClearFilters}>
            Clear All
          </button>
        </div>

        <div className="filter-group">
          <h4 className="filter-subtitle">Categories</h4>
          <ul className="filter-list">
            {categories.map((cat) => (
              <li key={cat} className="filter-item">
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => {
                      setSelectedCategory(cat);
                      setSelectedSubCategory('All'); // reset subcat on category change
                    }}
                  />
                  <span className="radio-mark"></span>
                  <span className="radio-label">{cat}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {selectedCategory !== 'All' && subCategories[selectedCategory] && subCategories[selectedCategory].length > 0 && (
          <div className="filter-group">
            <h4 className="filter-subtitle">{selectedCategory} Types</h4>
            <ul className="filter-list">
              <li className="filter-item">
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="subcategory"
                    checked={selectedSubCategory === 'All'}
                    onChange={() => setSelectedSubCategory('All')}
                  />
                  <span className="radio-mark"></span>
                  <span className="radio-label">All {selectedCategory}</span>
                </label>
              </li>
              {subCategories[selectedCategory].map((subCat) => (
                <li key={subCat} className="filter-item">
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="subcategory"
                      checked={selectedSubCategory === subCat}
                      onChange={() => setSelectedSubCategory(subCat)}
                    />
                    <span className="radio-mark"></span>
                    <span className="radio-label">{subCat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="filter-group">
          <h4 className="filter-subtitle">Price Range</h4>
          <div className="price-slider-container">
            <div className="price-values">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            <div className="multi-range-slider">
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={handleMinPriceChange}
                className="range-min"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
                className="range-max"
              />
              <div
                className="slider-track"
                style={{
                  left: `${(priceRange[0] / 10000) * 100}%`,
                  right: `${100 - (priceRange[1] / 10000) * 100}%`
                }}
              ></div>
            </div>
          </div>
        </div>

        <button className="btn-primary mobile-apply-btn" onClick={onClose}>
          Apply Filters
        </button>
      </aside>
    </>
  );
};

export default Filters;
