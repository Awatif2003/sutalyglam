import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <div className="contact-info">
      <div className="contact-details">
        <p><strong>Phone:</strong> +255 123 456 789</p>
        <p><strong>Location:</strong> Kisonge Thabit Kombo Building, Zanzibar</p>
        <div className="contact-socials">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Sutaly Glam Treat Location"
          src="https://www.google.com/maps?q=Kisonge+Thabit+Kombo+Building,+Zanzibar&output=embed"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Contact;
