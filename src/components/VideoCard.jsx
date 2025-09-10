import React from 'react';
import './VideoCard.css';

const VideoCard = ({ src, title }) => (
  <div className="video-card">
    <video controls preload="metadata" className="video-element" aria-label={title}>
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoCard;
