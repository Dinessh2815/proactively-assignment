import React from "react";
import "./Card.css";

const Card = ({
  image,
  badgeIcon,
  badgeText,
  badgeBg,
  title,
  description,
  isMobile,
  className,
}) => {
  return (
    <div
      className={`pillar-card ${isMobile ? "pillar-card-mobile" : ""} ${
        className || ""
      }`}
    >
      <div
        className={`pillar-card-image-container ${
          isMobile ? "pillar-card-image-container-mobile" : ""
        }`}
      >
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
      <div
        className={
          isMobile
            ? "pillar-card-content pillar-card-content-mobile"
            : "pillar-card-content"
        }
      >
        <div
          className={
            isMobile
              ? "pillar-card-title pillar-card-title-mobile"
              : "pillar-card-title"
          }
        >
          {title}
        </div>
        <div
          className={
            isMobile
              ? "pillar-card-description pillar-card-description-mobile"
              : "pillar-card-description"
          }
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
