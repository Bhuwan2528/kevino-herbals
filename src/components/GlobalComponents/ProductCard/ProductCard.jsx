import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.badge && <span className="product-badge">{product.badge}</span>}

        <img src={product.image} alt={product.title} className="product-image primary-img" />

        <div className="product-actions-overlay">
          <button className="btn-primary add-to-cart-btn">
            <FiShoppingCart className="btn-icon" /> Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className="rating-count">({product.reviews})</span>
        </div>

        {product.tags && product.tags.length > 0 && (
          <div className="product-tags">
            {product.tags.map(tag => (
              <span key={tag} className="product-tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="product-price-wrapper">
          <div className="product-price">₹{product.price.toFixed(2)}</div>
          {product.oldPrice && <div className="product-old-price">₹{product.oldPrice.toFixed(2)}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
