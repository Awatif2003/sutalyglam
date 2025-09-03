import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const services = [
  { name: 'Waxing', description: 'Smooth and gentle waxing for all skin types.', price: '$15', video: '/src/assets/placeholders/waxing.mp4' },
  { name: 'Facial', description: 'Rejuvenating facial treatments for glowing skin.', price: '$25', video: '/src/assets/placeholders/facial.mp4' },
  { name: 'Skincare Consultation', description: 'Personalized skincare advice from experts.', price: '$20', video: '/src/assets/placeholders/consultation.mp4' },
];

const Services = () => (
  <div className="services-page">
    <h1>Our Services</h1>
    <div className="services-grid">
      {services.map((s, i) => <ServiceCard key={i} {...s} />)}
    </div>
  </div>
);

export default Services;
