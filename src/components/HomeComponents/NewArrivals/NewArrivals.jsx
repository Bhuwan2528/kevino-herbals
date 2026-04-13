import ProductCard from '../../GlobalComponents/ProductCard/ProductCard';
import './NewArrivals.css';
import { products } from '../../../data/products';

const NewArrivals = () => {

  const newArrivals = products
    .slice(0, 4); // max 6 products

  return (
    <section className="new-arrivals-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <a href="/products" className="view-all-link">Shop Collection</a>
        </div>

        <div className="product-grid">
          {newArrivals.map(product => (
            <div key={product.id} className="grid-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;