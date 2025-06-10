import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    if (dropdownOpen || mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, mobileMenuOpen]);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/icons/Group 1010108451.svg"
          alt="Logo"
          className="navbar-logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-right desktop-layout">
        <span className="navbar-title">List your practice</span>
        <span className="navbar-separator">|</span>
        <span className="navbar-title">For Employers</span>
        <span className="navbar-separator">|</span>
        <span className="navbar-title">Courses</span>
        <span className="navbar-separator">|</span>
        <span className="navbar-title">Books</span>
        <span className="navbar-separator">|</span>
        <span className="navbar-title">Speakers</span>
        <span className="navbar-separator">|</span>
        <div className="navbar-dropdown" ref={dropdownRef}>
          <span
            className="navbar-title navbar-dropdown-toggle"
            onClick={() => setDropdownOpen((open) => !open)}
            tabIndex={0}
            style={{ userSelect: "none" }}
          >
            Login / Signups <span className="arrow-down">▼</span>
          </span>
          <div
            className="navbar-dropdown-menu"
            style={{ display: dropdownOpen ? "flex" : "none" }}
          >
            <div className="dropdown-section">
              <div className="dropdown-title">Doctor</div>
              <div className="dropdown-link">Login</div>
              <div className="dropdown-link">Sign up</div>
            </div>
            <div className="dropdown-section">
              <div className="dropdown-title">Patients</div>
              <div className="dropdown-link">Login</div>
              <div className="dropdown-link">Signup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="mobile-layout mobile-menu-toggle">
        <button
          className="hamburger-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <span className="hamburger-icon">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
        ref={mobileMenuRef}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <button
              className="close-menu-button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="close-icon">✕</span>
            </button>
            <img
              src="/icons/Group 1010108451.svg"
              alt="ProVital"
              className="navbar-logo"
            />
          </div>

          <div className="mobile-login-sections">
            <div className="mobile-login-section">
              <div className="mobile-login-title">Doctor</div>
              <div className="mobile-login-links">
                <a href="#login" className="mobile-login-link">
                  Login
                </a>
                <a href="#signup" className="mobile-login-link">
                  Sign up
                </a>
              </div>
            </div>

            <div className="mobile-login-section">
              <div className="mobile-login-title">Patients</div>
              <div className="mobile-login-links">
                <a href="#login" className="mobile-login-link">
                  Login
                </a>
                <a href="#signup" className="mobile-login-link">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div className="mobile-nav-links">
            <a href="#doctors" className="mobile-nav-link">
              Doctors
              <span className="mobile-nav-arrow">→</span>
            </a>
            <a href="#list-practice" className="mobile-nav-link">
              List your practice
              <span className="mobile-nav-arrow">→</span>
            </a>
            <a href="#for-employers" className="mobile-nav-link">
              For Employers
              <span className="mobile-nav-arrow">→</span>
            </a>
            <a href="#courses" className="mobile-nav-link">
              Courses
              <span className="mobile-nav-arrow">→</span>
            </a>
            <a href="#books" className="mobile-nav-link">
              Books
              <span className="mobile-nav-arrow">→</span>
            </a>
            <a href="#speakers" className="mobile-nav-link">
              Speakers
              <span className="mobile-nav-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
