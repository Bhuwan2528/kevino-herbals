import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser
} from "react-icons/fi";
import { RiBox3Line } from "react-icons/ri";
import "./Header.css";
import logo from '../../../assets/logo.png'

const messages = [
  "🌿 100% Natural Herbal Products Made with Love",
  "🚚 Free Shipping on Order Of Above ₹999",
  "🔥 Flat 10% OFF on New Arrivals For New Customers",
  "💚 Trusted by 10,000+ Customers and Becoming best in Community"
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ TOP STRIP (UNCHANGED) */}
      <div className="top-strip">
        <span key={index} className="strip-text">
          {messages[index]}
        </span>
      </div>

      <header className={`header ${scrolled ? "header-fixed" : ""}`}>

        <div className="header-inner container">

          {/* ✅ LOGO */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* ✅ NAV LINKS */}
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/new">New Arrivals</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/bestseller">Best Sellers</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* ✅ SEARCH BAR */}
          <div className="header-search">
            <FiSearch />
            <input placeholder="Search herbal products..." />
          </div>

          {/* ✅ ACTIONS */}
          <div className="header-actions">
            <Link to="/profile">
              <FiUser />
            </Link>
            <Link to="/orders">
              <RiBox3Line />
            </Link>
            <Link to="/cart" className="cart-icon">
              <FiShoppingCart />
              <span>2</span>
            </Link>
          </div>

        </div>

      </header>
    </>
  );
};

export default Header;