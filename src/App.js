import React from "react";
import { ImageScroller } from "./components/ImageScroller";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="hero-section">
        <ImageScroller images={images} className="left-scroller" />
        <ImageScroller images={images} reverse />
        <div className="hero-text-section">
          <div className="lifestyle-medicine-title">
            Book an Appointment with{" "}
            <span className="gradient-text">lifestyle medicine</span> experts
          </div>
          <div className="lifestyle-medicine-subtitle">
            Optimize your lifestyle and reverse chronic diseases
          </div>
        </div>
      </div>
      <div className="search-bar-container">
        <form className="search-bar-form">
          <div className="search-input search-input-icon">
            <span className="search-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19l-4-4m2-5A8 8 0 1 1 3 3a8 8 0 0 1 14 7Z"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Condition, procedure, speciality..."
            />
          </div>
          <div className="search-input search-input-icon">
            <span className="search-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a6 6 0 0 1 6 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 0 1 6-6Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input type="text" placeholder="City, state, or zipcode" />
          </div>
          <div className="search-input search-input-icon">
            <span className="search-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="5"
                  width="16"
                  height="10"
                  rx="2"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                />
                <path
                  d="M6 9h.01M10 9h.01M14 9h.01"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input type="text" placeholder="Insurance carrier" />
          </div>
          <button className="find-now-btn" type="submit">
            <span className="find-now-icon">
              <svg
                width="21"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19l-4-4m2-5A8 8 0 1 1 3 3a8 8 0 0 1 14 7Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Find now
          </button>
        </form>
      </div>
      <div className="slant-bar"></div>
      {/* Main content of the web page goes here */}
    </div>
  );
}

export default App;
