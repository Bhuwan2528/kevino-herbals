import { useNavigate } from 'react-router-dom';
import ProductCard from '../../GlobalComponents/ProductCard/ProductCard';
import { products } from '../../../data/products';
import './RelatedProducts.css';

const RelatedProducts = ({ currentProduct }) => {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter(
      (p) => p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4);

  /* If not enough in same category, fill from other products */
  const extraNeeded = 4 - relatedProducts.length;
  if (extraNeeded > 0) {
    const extras = products
      .filter(
        (p) =>
          p.id !== currentProduct.id &&
          !relatedProducts.find((rp) => rp.id === p.id)
      )
      .slice(0, extraNeeded);
    relatedProducts.push(...extras);
  }

  if (relatedProducts.length === 0) return null;

  const handleProductClick = (id) => {
    navigate(`/product-detail`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pdp-related-section">
      <div className="pdp-related-header">
        <h2>You May Also Like</h2>
        <p>Explore more herbal products curated just for you</p>
      </div>

      <div className="pdp-related-grid">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="pdp-related-card-wrap"
            onClick={() => handleProductClick(product.id)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
