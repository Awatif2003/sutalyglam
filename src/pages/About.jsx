import React from 'react';
import logo from '../assets/logo.png';
import './About.css';

const hours = [
  { day: 'Monday', time: '8:00 AM — 4:00 PM' },
  { day: 'Tuesday', time: '8:00 AM — 4:00 PM' },
  { day: 'Wednesday', time: '8:00 AM — 4:00 PM' },
  { day: 'Thursday', time: '8:00 AM — 4:00 PM' },
  { day: 'Friday', time: '8:00 AM — 4:00 PM' },
  { day: 'Saturday', time: '8:00 AM — 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const About = () => (
  <main className="about-page" aria-labelledby="about-title">
    <div className="about-container">
        <div className="about-hero centered">
          <img src={logo} alt="Sutaly Glam Treat logo" className="about-logo" />
          <h1 id="about-title">SutalyGlamTreat</h1>
          <p className="about-lead">
            SutalyGlamTreat is a beauty and skin care studio committed to delivering professional treatments that reveal your natural glow.
            We specialize in safe, modern, and effective solutions designed to keep you looking radiant and confident every day.
          </p>
          {/* WhatsApp booking removed per request */}
        </div>

        <section className="about-section stacked" aria-label="Services - English">
          <h2 className="section-title">Our Services</h2>
          <ul className="about-highlights">
            <li>Facial / Advanced skin treatments</li>
            <li>Waxing</li>
            <li>Skin care products</li>
          </ul>
        </section>
        <hr className="about-divider" />


        <section className="about-hours" aria-label="Hours of operation">
          <h2 className="section-title">Hours of operation</h2>
          <ul className="hours-list">
            {hours.map(h => (
              <li key={h.day} className="hours-item">
                <span className="hours-day">{h.day}</span>
                <span className="hours-time">{h.time}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="about-divider" />

        
      </div>
  </main>
);

export default About;
