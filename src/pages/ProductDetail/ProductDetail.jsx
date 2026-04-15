import { useParams, Link } from 'react-router-dom';
import Header from '../../components/GlobalComponents/Header/Header';
import Banner from '../../components/GlobalComponents/Banner/Banner';
import ProductGallery from '../../components/ProductDetailComp/ProductGallery/ProductGallery';
import ProductInfo from '../../components/ProductDetailComp/ProductInfo/ProductInfo';
import ProductTabs from '../../components/ProductDetailComp/ProductTabs/ProductTabs';
import RelatedProducts from '../../components/ProductDetailComp/RelatedProducts/RelatedProducts';
import { products } from '../../data/products';
import { FiAlertCircle, FiArrowLeft } from 'react-icons/fi';
import './ProductDetail.css';

const ProductDetail = () => {
  const product = products[0];

  /* Edge case: product not found */
  // if (!product) {
  //   return (
  //     <>
  //       <Header />
  //       <div className="pdp-not-found">
  //         <FiAlertCircle className="pdp-not-found-icon" />
  //         <h2>Product Not Found</h2>
  //         <p>The product you're looking for doesn't exist or has been removed.</p>
  //         <Link to="/products" className="btn-primary pdp-back-btn">
  //           <FiArrowLeft /> Back to Products
  //         </Link>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <main className="pdp-page">
        <Banner
          title={product.title}
          subtitle={product.category}
          bgImage="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?s=612x612&w=0&k=20&c=X4pwnTaBzXHDOGZlcdJdlKxmYd__61xboHVIiR5JMIk="
        />

        <div className="container pdp-main-container">
          {/* Top Section: Gallery + Info */}
          <div className="pdp-top-section">
            <div className="pdp-gallery-col">
              <ProductGallery images={product.images} title={product.title} />
            </div>
            <div className="pdp-info-col">
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Bottom Section: Tabs + Related */}
          <ProductTabs product={product} />
          <RelatedProducts currentProduct={product} />
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
