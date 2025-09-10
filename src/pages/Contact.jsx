import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <div className="contact-info">
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:awatifsaid4444@gmail.com">awatifsaid4444@gmail.com</a></p>
        <p><strong>Phone (call):</strong> <a href="tel:+255772594976">+255 772 594 976</a></p>
        <p><strong>WhatsApp (no calls):</strong> <a href="https://wa.me/255628614548" target="_blank" rel="noopener noreferrer">+255 628 614 548</a></p>
        <p><strong>Location:</strong> <a href="https://www.google.com/maps?q=Kisonge+Thabit+Kombo+Building,+Zanzibar" target="_blank" rel="noopener noreferrer">Kisonge Thabit Kombo Building, Zanzibar</a></p>
        <div className="contact-socials">
          <a href="https://instagram.com/sutalyglamtreat" aria-label="Instagram @sutalyglamtreat" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/255628614548" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
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
