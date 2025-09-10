import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.PNG';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Sutaly Glam Treat logo" className="nav-logo" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* reserved for future actions (login/cart) */}
      </div>
    </div>
  </nav>
);

export default Navbar;
