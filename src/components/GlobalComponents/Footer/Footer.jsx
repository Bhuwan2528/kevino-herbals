import { Link } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import TrustStrip from './TrustStrip';
import './Footer.css';
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <TrustStrip />

      <div className="main-footer">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Section */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="" />
              </Link>
              <p className="footer-desc">
                Bringing the ancient wisdom of Ayurveda to modern skincare and wellness. 100% natural, ethically sourced, and mindfully crafted.
              </p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook" className="social-icon"><FiFacebook /></a>
                <a href="#" aria-label="Instagram" className="social-icon"><FiInstagram /></a>
                <a href="#" aria-label="Twitter" className="social-icon"><FiTwitter /></a>
                <a href="#" aria-label="YouTube" className="social-icon"><FiYoutube /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Shop All</Link></li>
                <li><Link to="/blog">Our Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-col">
              <h4 className="footer-heading">Categories</h4>
              <ul className="footer-links">
                <li><Link to="/products?category=skincare">Skincare</Link></li>
                <li><Link to="/products?category=haircare">Haircare</Link></li>
                <li><Link to="/products?category=wellness">Wellness Teas</Link></li>
                <li><Link to="/products?category=oils">Essential Oils</Link></li>
                <li><Link to="/products?category=gifts">Gift Sets</Link></li>
              </ul>
            </div>

            {/* Newsletter/Contact */}
            <div className="footer-col newsletter-col">
              <h4 className="footer-heading">Stay Connected</h4>
              <p className="footer-text">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                <button type="submit" className="btn-primary subscribe-btn">Subscribe</button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">&copy; {new Date().getFullYear()} Only Herbs. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
