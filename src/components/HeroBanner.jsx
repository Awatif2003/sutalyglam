import React from 'react';
import logo from '../assets/logo.PNG';
import './HeroBanner.css';

const HeroBanner = () => (
  <section className="hero-banner">
    <div className="hero-content">
      <img src={logo} alt="Sutaly Glam Treat logo" className="hero-logo" />
      <h1 className="brand-name">Sutaly Glam Treat</h1>
      <p className="brand-caption">Let your skin breathe</p>
    </div>
  </section>
);

export default HeroBanner;
