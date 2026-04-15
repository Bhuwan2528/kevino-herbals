import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import { products } from '../../data/products';
import "./Cart.css";
import { Link } from "react-router-dom";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";

const Cart = () => {

    return (
        <>
            <Header />
            <main className="cart-page-wrapper container">

                {/* TOP */}
                <div className="cart-header">
                    <Link to="/" className="cart-back-btn">
                        <FiArrowLeft /> Continue Shopping
                    </Link>
                    <h1 className="cart-heading">Shopping Cart</h1>
                </div>

                <div className="cart-grid">

                    {/* LEFT */}
                    <div className="cart-items-box">
                        {products.slice(0, 3).map((item) => (
                            <div key={item.id} className="cart-item-row">

                                {/* TOP */}
                                <div className="cart-item-top">
                                    <img src={item.image} alt={item.title} className="cart-item-img" />

                                    <div className="cart-item-details">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <span className="cart-item-price">₹{item.price}</span>
                                    </div>
                                </div>

                                {/* BOTTOM */}
                                <div className="cart-item-bottom">

                                    <div className="cart-qty-box">
                                        <button className="cart-qty-btn">-</button>
                                        <span className="cart-qty-value">1</span>
                                        <button className="cart-qty-btn">+</button>
                                    </div>

                                    <div className="cart-item-actions">
                                        <span className="cart-item-total">₹{item.price}</span>
                                        <button className="cart-remove-btn">
                                            <FiTrash2 /> Remove
                                        </button>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="cart-summary-box">
                        <h3 className="cart-summary-title">Order Summary</h3>

                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>₹189.05</span>
                        </div>

                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span className="cart-free">Free</span>
                        </div>

                        <div className="cart-divider-line"></div>

                        <div className="cart-coupon-section">
                            <p>Have a Coupon?</p>
                            <div className="cart-coupon-box">
                                <input type="text" placeholder="Enter code" />
                                <button>Apply</button>
                            </div>
                        </div>

                        <div className="cart-summary-total">
                            <span>Total</span>
                            <span>₹189.05</span>
                        </div>

                        <button className="btn-primary cart-checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cart;