import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';

const featuredProducts = [
  { name: 'Glow Serum', image: '/src/assets/placeholders/product1.jpg', price: '$29' },
  { name: 'Hydra Cleanser', image: '/src/assets/placeholders/product2.jpg', price: '$19' },
  { name: 'Radiance Cream', image: '/src/assets/placeholders/product3.jpg', price: '$35' },
];

const featuredServices = [
  { name: 'Waxing', description: 'Smooth and gentle waxing for all skin types.', price: '$15', video: '/src/assets/placeholders/waxing.mp4' },
  { name: 'Facial', description: 'Rejuvenating facial treatments for glowing skin.', price: '$25', video: '/src/assets/placeholders/facial.mp4' },
  { name: 'Skincare Consultation', description: 'Personalized skincare advice from experts.', price: '$20', video: '/src/assets/placeholders/consultation.mp4' },
];

const testimonials = [
  { name: 'Amina', text: 'My skin has never felt better! Highly recommend Sutaly Glam Treat.', image: '/src/assets/placeholders/testimonial1.jpg' },
  { name: 'Fatma', text: 'Professional service and amazing products!', image: '/src/assets/placeholders/testimonial2.jpg' },
  { name: 'Zainab', text: 'The facial was so relaxing and effective.', image: '/src/assets/placeholders/testimonial3.jpg' },
];

const Home = () => (
  <div className="home-page">
    <HeroBanner />
    <section className="featured-section">
      <h2>Featured Products</h2>
      <div className="featured-grid">
        {featuredProducts.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
    <section className="featured-section">
      <h2>Featured Services</h2>
      <div className="featured-grid">
        {featuredServices.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
      </div>
    </section>
  </div>
);

export default Home;
