import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/icons/Group 1010108451.svg"
          alt="Logo"
          className="navbar-logo"
        />
      </div>
      <div className="navbar-right">
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
    </nav>
  );
}

export default Navbar;
