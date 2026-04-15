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
  "🔥 Flat 10% OFF For New Customers",
  "💚 Trusted by 10,000+ Customers & Growing Fast"
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP STRIP SAME */}
      <div className="top-strip">
        <span key={index} className="strip-text">
          {messages[index]}
        </span>
      </div>

      <header className={`header ${scrolled ? "header-fixed" : ""}`}>

        <div className="header-inner container">

          {/* ✅ MOBILE MENU BTN */}
          <div className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
            ☰
          </div>

          {/* LOGO */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* NAV (DESKTOP ONLY) */}
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/products">New Arrivals</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/products">Best Sellers</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          {/* SEARCH (DESKTOP) */}
          <div className="header-search desktop-search">
            <FiSearch />
            <input placeholder="Search herbal products..." />
          </div>

          {/* ACTIONS */}
          <div className="header-actions">
            <Link to="/profile"><FiUser /></Link>
            <Link to="/orders"><RiBox3Line /></Link>
            <Link to="/cart" className="cart-icon">
              <FiShoppingCart />
              <span>2</span>
            </Link>
          </div>

        </div>

        {/* ✅ MOBILE SEARCH BAR */}
        <div className="mobile-search">
          <FiSearch />
          <input placeholder="Search herbal products..." />
        </div>

      </header>

      {/* ✅ SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <span onClick={() => setMenuOpen(false)}>✕</span>
        </div>

        <nav className="sidebar-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/story" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Our Products</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Best Sellers</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;