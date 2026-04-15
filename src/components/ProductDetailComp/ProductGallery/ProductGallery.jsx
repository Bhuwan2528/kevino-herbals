import { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pdp-gallery">
      <div className="pdp-gallery-main">
        <img
          src={images[activeIndex]}
          alt={`${title} - View ${activeIndex + 1}`}
          className="pdp-gallery-main-img"
        />
      </div>

      <div className="pdp-gallery-thumbs">
        {images.map((img, index) => (
          <button
            key={index}
            className={`pdp-thumb ${index === activeIndex ? 'pdp-thumb-active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={img} alt={`${title} thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
