import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbShoppingBagHeart } from "react-icons/tb";
import "./Header.css";
import logo from '../../../assets/logo.png'

const messages = [
  "🌿 100% Natural Herbal Products",
  "🚚 Free Shipping Above ₹999",
  "🔥 Flat 50% OFF on New Arrivals",
  "💚 Trusted by 10,000+ Customers"
];

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const inputRef = useRef();

  // 🔥 TOP STRIP SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 AUTO FOCUS SEARCH
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      {/* TOP STRIP */}
      <div className="top-strip">
        <span key={index} className="strip-text">
          {messages[index]}
        </span>
      </div>

      <header className="header">

        {/* MAIN HEADER */}
        <div className="header-main">

          {/* LEFT */}
          <div className="header-left">

            {/* MOBILE MENU */}
            <div
              className="menu-btn"
              onClick={() => setSidebarOpen(true)}
            >
              <span></span>
              <span></span>
            </div>

            {/* SOCIAL (DESKTOP) */}
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaXTwitter />
            </div>

          </div>

          {/* LOGO */}
          <div className="header-center">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="header-right">

            {/* 🔥 SEARCH EXPAND */}
            <div className={`search-box ${searchOpen ? "active" : ""}`}>
              <input
                ref={inputRef}
                placeholder="Search herbal products..."
              />
            </div>

            <FiSearch
              className="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            />

            <FiUser className="icon" />

            <div className="cart">
              <FiShoppingCart />
              <span>2</span>
            </div>

          </div>

        </div>

        {/* MOBILE SEARCH */}
        <div className="search-bar">
          <input placeholder="Search herbal products..." />
        </div>

        {/* NAVBAR */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/new">New Arrivals</Link>
          <Link to="/products">All Products</Link>
          <Link to="/bestseller">Best Sellers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* SIDEBAR */}
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
          <FiX className="close" onClick={() => setSidebarOpen(false)} />

          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/new">New Arrivals</Link>
          <Link to="/products">All Products</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/bestseller">Best Sellers</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </header>
    </>
  );
};

export default Header;