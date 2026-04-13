import ProductCard from '../../GlobalComponents/ProductCard/ProductCard';
import './BestSellers.css';
import { products } from '../../../data/products';

const BestSellers = () => {

  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="bestsellers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="best-section-title">Our Best Sellers</h2>
          <a href="/products" className="view-all-link">View All Products</a>
        </div>

        <div className="product-grid">
          {bestSellers.map(product => (
            <div key={product.id} className="grid-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;