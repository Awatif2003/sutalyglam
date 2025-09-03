import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description, price, video }) => (
  <div className="service-card">
    <div className="service-video">
      <video src={video} controls poster="/src/assets/placeholders/service-placeholder.jpg" width="100%" height="120" />
    </div>
    <h3 className="service-name">{name}</h3>
    <p className="service-description">{description}</p>
    <p className="service-price">{price}</p>
  </div>
);

export default ServiceCard;
