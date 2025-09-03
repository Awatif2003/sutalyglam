import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, text, image }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} className="testimonial-image" />
    <p className="testimonial-text">“{text}”</p>
    <span className="testimonial-name">- {name}</span>
  </div>
);

export default TestimonialCard;
