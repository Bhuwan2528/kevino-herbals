import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './Banner.css';

const Banner = ({ title, subtitle, bgImage }) => {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="banner-overlay"></div>
      <div className="container banner-content">
        <span className="banner-pill">🌿 Herbal Store</span>
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        
        <div className="breadcrumb">
          <span>Home</span>
          <FiChevronRight className="breadcrumb-icon" />
          <span className="active-breadcrumb">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
