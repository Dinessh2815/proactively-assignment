import React from 'react';
import './ImageScroller.css';

export function ImageScroller({ images, reverse = false }) {
  return (
    <div className="image-scroller">
      <div className={`image-track ${reverse ? 'reverse' : ''}`}>
        {images.concat(images).map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} />
        ))}
      </div>
    </div>
  );
}
