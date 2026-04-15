import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './ProductTabs.css';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { key: 'description', label: 'Description' },
    { key: 'details', label: 'Product Details' },
    { key: 'faq', label: 'FAQ' },
    { key: 'reviews', label: 'Reviews' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="pdp-tab-content-inner">
            <h3>About This Product</h3>
            <p>{product.description}</p>
            <p>
              Our products are made using 100% natural Ayurvedic ingredients,
              carefully sourced and processed to preserve their potency and
              effectiveness. Each formulation is backed by centuries of Ayurvedic
              wisdom and modern quality assurance processes.
            </p>
            <h4>Why Choose Kevino Herbals?</h4>
            <ul>
              <li>100% Natural &amp; Ayurvedic ingredients</li>
              <li>GMP Certified manufacturing facility</li>
              <li>No artificial preservatives or chemicals</li>
              <li>Clinically tested formulations</li>
              <li>Trusted by over 10,000+ customers across India</li>
            </ul>
          </div>
        );

      case 'details':
        return (
          <div className="pdp-tab-content-inner">
            <h3>Product Specifications</h3>
            {product.details && (
              <table className="pdp-details-table">
                <tbody>
                  {Object.entries(product.details).map(([key, value]) => (
                    <tr key={key}>
                      <td className="pdp-detail-key">{key}</td>
                      <td className="pdp-detail-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'faq':
        return (
          <div className="pdp-tab-content-inner">
            <h3>Frequently Asked Questions</h3>
            <div className="pdp-faq-list">
              {product.faqs && product.faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="pdp-tab-content-inner">
            <h3>Customer Reviews</h3>
            <div className="pdp-reviews-summary">
              <div className="pdp-reviews-score">
                <span className="pdp-reviews-big-num">{product.rating}</span>
                <div className="pdp-reviews-stars">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="pdp-reviews-total">Based on {product.reviews} reviews</span>
              </div>
            </div>

            <div className="pdp-reviews-list">
              {[
                { name: 'Rajesh K.', rating: 5, date: '2 weeks ago', text: 'Excellent product! Have been using for a month now and can see visible results. Highly recommended for everyone.' },
                { name: 'Priya M.', rating: 4, date: '1 month ago', text: 'Good quality product. Delivery was fast and packaging was neat. Will order again.' },
                { name: 'Amit S.', rating: 5, date: '2 months ago', text: 'Best Ayurvedic product I have tried. Natural ingredients and no side effects. Very satisfied with the purchase.' }
              ].map((review, index) => (
                <div key={index} className="pdp-review-card">
                  <div className="pdp-review-header">
                    <div className="pdp-review-avatar">{review.name.charAt(0)}</div>
                    <div className="pdp-review-meta">
                      <span className="pdp-review-name">{review.name}</span>
                      <span className="pdp-review-date">{review.date}</span>
                    </div>
                    <div className="pdp-review-rating">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="pdp-review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pdp-tabs-section">
      <div className="pdp-tabs-container">
        <div className="pdp-tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pdp-tab-btn ${activeTab === tab.key ? 'pdp-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pdp-tab-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

/* FAQ Accordion Item */
const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`pdp-faq-item ${isOpen ? 'pdp-faq-open' : ''}`}>
      <button className="pdp-faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <FiChevronDown className="pdp-faq-icon" />
      </button>
      <div className="pdp-faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default ProductTabs;
