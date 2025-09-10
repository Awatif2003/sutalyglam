import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description, price, video }) => (
  <div className="service-card">
    <h3 className="service-name">{name}</h3>
    {video ? (
      <div className="service-video">
        <video controls style={{ maxWidth: '100%' }} aria-label={`${name} demo video`} preload="metadata">
          <source src={video} />
          Your browser does not support the video tag.
        </video>
      </div>
    ) : null}
    <p className="service-description">{description}</p>
    <p className="service-price">{price}</p>
  </div>
);

export default ServiceCard;
