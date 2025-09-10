import React from 'react';
import logo from '../assets/logo.PNG';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-content">
        <img src={logo} alt="Sutaly Glam Treat logo" className="footer-logo-img" />
        <div className="footer-info">
          <p>Contact: +255 628 614 548</p>
          <p>Location: Kisonge Thabit Kombo Building, Zanzibar</p>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Sutaly Glam Treat. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
