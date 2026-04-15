import { useState } from 'react';
import { FiShoppingCart, FiZap, FiTruck, FiCreditCard, FiRefreshCw, FiDollarSign } from 'react-icons/fi';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="pdp-info">
      {/* Category Pill */}
      <span className="pdp-category-pill">{product.category}</span>

      {/* Title & Rating Row */}
      <div className="pdp-title-row">
        <h1 className="pdp-product-title">{product.title}</h1>
        <div className="pdp-rating-badge">
          <span className="pdp-rating-star">★</span>
          <span className="pdp-rating-value">{product.rating}</span>
          <span className="pdp-rating-count">({product.reviews} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="pdp-price-block">
        <span className="pdp-current-price">₹{product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="pdp-old-price">₹{product.oldPrice.toFixed(2)}</span>
        )}
        {discount && <span className="pdp-discount-badge">{discount}% OFF</span>}
      </div>

      {/* Short Description */}
      <p className="pdp-short-desc">{product.description}</p>

      {/* Variants */}
      {product.variants && product.variants.length > 0 && (
        <div className="pdp-variants-section">
          <h4 className="pdp-section-label">Size / Variant</h4>
          <div className="pdp-variants-list">
            {product.variants.map((variant, index) => (
              <button
                key={variant}
                className={`pdp-variant-btn ${index === selectedVariant ? 'pdp-variant-active' : ''}`}
                onClick={() => setSelectedVariant(index)}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="pdp-quantity-section">
        <h4 className="pdp-section-label">Quantity</h4>
        <div className="pdp-quantity-control">
          <button
            className="pdp-qty-btn"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="pdp-qty-value">{quantity}</span>
          <button
            className="pdp-qty-btn"
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pdp-actions">
        <button className="pdp-btn pdp-btn-cart">
          <FiShoppingCart /> Add to Cart
        </button>
        <button className="pdp-btn pdp-btn-buy">
          <FiZap /> Buy Now
        </button>
      </div>

      {/* Service Info */}
      <div className="pdp-services">
        <div className="pdp-service-item">
          <FiDollarSign className="pdp-service-icon" />
          <span>Cash on Delivery</span>
        </div>
        <div className="pdp-service-item">
          <FiCreditCard className="pdp-service-icon" />
          <span>Online Payment</span>
        </div>
        <div className="pdp-service-item">
          <FiTruck className="pdp-service-icon" />
          <span>Free Shipping</span>
        </div>
        <div className="pdp-service-item">
          <FiRefreshCw className="pdp-service-icon" />
          <span>Easy Returns</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
