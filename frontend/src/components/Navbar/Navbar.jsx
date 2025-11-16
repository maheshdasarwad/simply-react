// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const logoSrc = assets.logo;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleNavLinkClick = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = el.offsetTop - 80; // offset for sticky header
        window.scrollTo({ top, behavior: "smooth" });
      }
      if (window.innerWidth <= 768) setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container nav-container">
        <nav className="nav" aria-label="Main navigation">
          <a href="/" className="logo" aria-label="Simply Saral Home">
            <img src={logoSrc} alt="Simply Saral Logo" />
            <div className="logo-text">
              Simply <span>Saral</span>
            </div>
          </a>
          <div className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks">
            <a
              href="#home"
              className="nav-btn"
              onClick={(e) => handleNavLinkClick(e, "#home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="nav-btn"
              onClick={(e) => handleNavLinkClick(e, "#services")}
            >
              Services
            </a>
            <a
              href="#features"
              className="nav-btn"
              onClick={(e) => handleNavLinkClick(e, "#features")}
            >
              Why us
            </a>
            <a
              href="#contact"
              className="nav-btn"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
            >
              Contact
            </a>
            <a href="/loginpage.html" className="login-btn">
              Log In
            </a>
            <a href="/SignUpPage.html" className="login-btn">
              Sign Up
            </a>
            <a href="/ManagementPage.html" className="login-btn">
              Management
            </a>
            {/* Theme toggle */}
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <i className="fas fa-sun" aria-hidden="true"></i>
              ) : (
                <i className="fas fa-moon" aria-hidden="true"></i>
              )}
            </button>
          </div>
          <button
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
