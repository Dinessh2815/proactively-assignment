import React from "react";
import "./Card.css";

const Card = ({ image, badgeIcon, badgeText, badgeBg, title, description }) => {
  return (
    <div className="pillar-card">
      <div className="pillar-card-image-container">
        <img src={image} alt={title} className="pillar-card-image" />
        {badgeText && (
          <div className="pillar-card-badge" style={{ background: badgeBg }}>
            {badgeIcon && (
              <span className="pillar-card-badge-icon">{badgeIcon}</span>
            )}
            <span className="pillar-card-badge-text">{badgeText}</span>
          </div>
        )}
      </div>
      <div className="pillar-card-content">
        <div className="pillar-card-title">{title}</div>
        <div className="pillar-card-description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
