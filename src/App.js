import React, { useState } from "react";
import { ImageScroller } from "./components/ImageScroller";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import "./components/PillarSection.css";

const pillarData = [
  {
    key: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    badgeIcon: (
      <svg
        width="22"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C6.03 2 2 6.03 2 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9Zm0 16.2A7.2 7.2 0 1 1 11 4.8a7.2 7.2 0 0 1 0 14.4Zm0-10.2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          fill="#4CB8C4"
        />
      </svg>
    ),
    badgeText: "121/80 mmHg",
    badgeBg: "#F7F7F7",
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    key: "Physical activity",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    badgeIcon: (
      <svg
        width="22"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C6.03 2 2 6.03 2 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9Zm0 16.2A7.2 7.2 0 1 1 11 4.8a7.2 7.2 0 0 1 0 14.4Zm0-10.2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          fill="#F7B267"
        />
      </svg>
    ),
    badgeText: "32 minutes",
    badgeBg: "#F7F7F7",
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    key: "Restorative sleep",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    badgeIcon: (
      <svg
        width="22"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2C6.03 2 2 6.03 2 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9Zm0 16.2A7.2 7.2 0 1 1 11 4.8a7.2 7.2 0 0 1 0 14.4Zm0-10.2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          fill="#7CD0A2"
        />
      </svg>
    ),
    badgeText: "8 hours",
    badgeBg: "#F7F7F7",
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is essential for optimal brain function and physical health.",
  },
  {
    key: "Stress management",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    badgeIcon: null,
    badgeText: "",
    badgeBg: "#F7F7F7",
    title: "Stress management",
    description:
      "Effective stress management improves mood, immune function, and overall well-being.",
  },
  {
    key: "Social connection",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    badgeIcon: null,
    badgeText: "",
    badgeBg: "#F7F7F7",
    title: "Social connection",
    description:
      "Strong social connections are linked to longer life and better health outcomes.",
  },
  {
    key: "Substance abuse",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    badgeIcon: null,
    badgeText: "",
    badgeBg: "#F7F7F7",
    title: "Substance abuse",
    description:
      "Avoiding harmful substances is crucial for maintaining long-term health.",
  },
];

const filterKeys = pillarData.map((p) => p.key);

function App() {
  const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  const [selected, setSelected] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = window.innerWidth >= 1600 ? 5 : 3;

  const handleFilter = (idx) => {
    setSelected(idx);
    setStartIdx(idx);
  };
  const handleLeft = () => {
    setStartIdx((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleRight = () => {
    setStartIdx((prev) =>
      prev < pillarData.length - visibleCount ? prev + 1 : prev
    );
  };

  const cardsToShow = pillarData.slice(startIdx, startIdx + visibleCount);

  return (
    <div className="app">
      <Navbar />
      {/* Desktop/Medium layout */}
      <div className="desktop-layout">
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
        <div className="main-content-desktop">
          <div className="grey-question">HOW IT WORKS</div>
          <div className="sub-heading-row">
            <div className="sub-heading">
              <span className="pillars-title-gradient">
                Lifestyle as medicine:
              </span>{" "}
              <span className="pillars-title-grey">The six pillars</span>
            </div>
            <div className="pillar-arrows pillar-arrows-top">
              <button
                className="pillar-arrow-btn"
                onClick={handleLeft}
                disabled={startIdx === 0}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                  <path
                    d="M14.5 8l-4 4 4 4"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="pillar-arrow-btn"
                onClick={handleRight}
                disabled={startIdx >= pillarData.length - visibleCount}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                  <path
                    d="M9.5 8l4 4-4 4"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pillar-section">
            <div className="pillar-filters">
              {filterKeys.map((key, idx) => (
                <button
                  key={key}
                  className={`pillar-filter-btn${
                    selected === idx ? " selected" : ""
                  }`}
                  onClick={() => handleFilter(idx)}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="pillar-cards-row">
              {cardsToShow.map((card, idx) => (
                <Card key={card.key} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="mobile-layout">
        <div className="hero-text-section">
          <div className="lifestyle-medicine-title">
            Book an Appointment with{" "}
            <span className="gradient-text">lifestyle medicine</span> experts
          </div>
          <div className="lifestyle-medicine-subtitle">
            Optimize your lifestyle and reverse chronic diseases
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
        <div className="mobile-image-scrollers">
          <ImageScroller images={images} className="left-scroller" />
          <ImageScroller images={images} reverse />
        </div>
        <div className="main-content-mobile">
          <div className="grey-question">HOW IT WORKS</div>
          <div className="sub-heading-row">
            <div className="sub-heading">
              <span className="pillars-title-gradient">
                Lifestyle as medicine:
              </span>{" "}
              <span className="pillars-title-grey">The six pillars</span>
            </div>
            <div className="pillar-arrows pillar-arrows-top">
              <button
                className="pillar-arrow-btn"
                onClick={handleLeft}
                disabled={startIdx === 0}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                  <path
                    d="M14.5 8l-4 4 4 4"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="pillar-arrow-btn"
                onClick={handleRight}
                disabled={startIdx >= pillarData.length - visibleCount}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                  <path
                    d="M9.5 8l4 4-4 4"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pillar-section">
            <div className="pillar-filters">
              {filterKeys.map((key, idx) => (
                <button
                  key={key}
                  className={`pillar-filter-btn${
                    selected === idx ? " selected" : ""
                  }`}
                  onClick={() => handleFilter(idx)}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="pillar-cards-row">
              {cardsToShow.map((card, idx) => (
                <Card key={card.key} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
