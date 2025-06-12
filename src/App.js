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
        <div className="main-content-mobile main-content-mobile-centered">
          <div className="grey-question">HOW IT WORKS</div>
          <div className="sub-heading-row" style={{ justifyContent: "center" }}>
            <div className="sub-heading">
              <span className="pillars-title-gradient">
                Lifestyle as medicine:
              </span>{" "}
              <span className="pillars-title-grey">The six pillars</span>
            </div>
          </div>

          {/* Card indicator dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {pillarData.map((_, idx) => (
              <div
                key={`dot-${idx}`}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: startIdx === idx ? "#4CB8C4" : "#D9D9D9",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
          <div className="pillar-section" style={{ width: "100%" }}>
            <div
              className="pillar-cards-row pillar-cards-row-mobile"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "390px", // match card height
                width: "100%",
                perspective: "1000px", // Add perspective for better 3D effect
              }}
              onTouchStart={(e) => {
                e.currentTarget.touchStartX = e.touches[0].clientX;
                e.currentTarget.touchStartY = e.touches[0].clientY;
                e.currentTarget.touchMoved = false;
                e.currentTarget.swiping = false;
                // Add classes for transition animation control
                const cards = e.currentTarget.querySelectorAll(
                  ".mobile-card-anim-wrapper"
                );
                cards.forEach((card) => card.classList.add("swiping"));
              }}
              onTouchMove={(e) => {
                const touchStartX = e.currentTarget.touchStartX;
                const touchStartY = e.currentTarget.touchStartY;

                if (touchStartX !== undefined && touchStartY !== undefined) {
                  const touchCurrentX = e.touches[0].clientX;
                  const touchCurrentY = e.touches[0].clientY;
                  const diffX = touchCurrentX - touchStartX;
                  const diffY = touchCurrentY - touchStartY;

                  // Determine if this is a horizontal swipe (prevent vertical scrolling interference)
                  if (!e.currentTarget.swiping) {
                    if (
                      Math.abs(diffX) > Math.abs(diffY) &&
                      Math.abs(diffX) > 10
                    ) {
                      e.currentTarget.swiping = true;
                      e.preventDefault(); // Prevent scrolling when swiping horizontally
                    }
                  }

                  if (e.currentTarget.swiping) {
                    e.currentTarget.touchMoved = true;

                    // Apply dynamic transform to cards based on swipe
                    const mainCard = e.currentTarget.querySelector(
                      ".mobile-card-anim-wrapper:nth-child(2)"
                    );
                    const prevCard = e.currentTarget.querySelector(
                      ".mobile-card-anim-wrapper:nth-child(1)"
                    );
                    const nextCard = e.currentTarget.querySelector(
                      ".mobile-card-anim-wrapper:nth-child(3)"
                    );

                    // Calculate swipe percentage (maximum 50% of screen width)
                    const maxSwipe = window.innerWidth * 0.5;
                    const swipePercent = Math.min(
                      Math.abs(diffX) / maxSwipe,
                      1
                    );

                    if (mainCard) {
                      mainCard.style.transform = `translateX(${
                        diffX * 0.5
                      }px) scale(${1 - swipePercent * 0.15})`;
                      mainCard.style.opacity = `${1 - swipePercent * 0.3}`;
                    }

                    // Move side cards accordingly with dynamic scaling
                    if (prevCard && diffX > 0) {
                      // Previous card coming into view
                      const moveAmount =
                        -50 + diffX / (window.innerWidth * 0.01);
                      const scaleAmount = 0.85 + swipePercent * 0.15;
                      prevCard.style.transform = `translateX(${moveAmount}vw) scale(${scaleAmount})`;
                      prevCard.style.opacity = `${0.7 + swipePercent * 0.3}`;
                    }

                    if (nextCard && diffX < 0) {
                      // Next card coming into view
                      const moveAmount =
                        50 + diffX / (window.innerWidth * 0.01);
                      const scaleAmount = 0.85 + swipePercent * 0.15;
                      nextCard.style.transform = `translateX(${moveAmount}vw) scale(${scaleAmount})`;
                      nextCard.style.opacity = `${0.7 + swipePercent * 0.3}`;
                    }
                  }
                }
              }}
              onTouchEnd={(e) => {
                if (!e.currentTarget.touchStartX) return;

                const touchStartX = e.currentTarget.touchStartX;
                const touchEndX = e.changedTouches[0].clientX;
                const diffX = touchEndX - touchStartX;

                // Remove swiping class to re-enable transitions
                const cards = e.currentTarget.querySelectorAll(
                  ".mobile-card-anim-wrapper"
                );
                cards.forEach((card) => card.classList.remove("swiping"));

                // Reset transforms on all cards with a small delay to allow animation
                setTimeout(() => {
                  cards.forEach((card) => {
                    card.style.transform = "";
                    card.style.opacity = "";
                  });
                }, 50);

                // Check if swipe was significant enough to change cards (20% of screen width)
                const swipeThreshold = window.innerWidth * 0.2;

                if (
                  e.currentTarget.swiping &&
                  Math.abs(diffX) > swipeThreshold
                ) {
                  if (diffX < 0 && startIdx < pillarData.length - 1) {
                    // Swipe left - show next card
                    setStartIdx(startIdx + 1);
                  } else if (diffX > 0 && startIdx > 0) {
                    // Swipe right - show previous card
                    setStartIdx(startIdx - 1);
                  }
                }

                e.currentTarget.touchStartX = undefined;
                e.currentTarget.touchStartY = undefined;
                e.currentTarget.touchMoved = false;
                e.currentTarget.swiping = false;
              }}
            >
              {/* Previous card (partially visible on the left) */}
              {startIdx > 0 && (
                <div
                  key={pillarData[startIdx - 1].key + "-side-prev"}
                  className="mobile-card-anim-wrapper"
                >
                  <Card
                    key={pillarData[startIdx - 1].key}
                    {...pillarData[startIdx - 1]}
                    isMobile={true}
                    className="pillar-card-side-prev"
                  />
                </div>
              )}

              {/* Main card */}
              <div
                key={pillarData[startIdx].key + "-main"}
                className="mobile-card-anim-wrapper"
              >
                <Card
                  key={pillarData[startIdx].key}
                  {...pillarData[startIdx]}
                  isMobile={true}
                />
              </div>

              {/* Next card (partially visible on the right) */}
              {startIdx < pillarData.length - 1 && (
                <div
                  key={pillarData[startIdx + 1].key + "-side"}
                  className="mobile-card-anim-wrapper"
                >
                  <Card
                    key={pillarData[startIdx + 1].key}
                    {...pillarData[startIdx + 1]}
                    isMobile={true}
                    className="pillar-card-side"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
