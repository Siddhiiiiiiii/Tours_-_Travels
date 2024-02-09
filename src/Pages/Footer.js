// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
    return (
      <div className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <div className="footer-section lic-section">
          <h2>SIDHVED TOURS AND TRAVELS</h2>
          <p>Providing trusted travel experience for over 10+ years.</p>
        </div>
        <div className="footer-section about-section">
          <h3>About</h3>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="footer-section explore-section">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/Gallery">Gallery</Link>
        </div>
        <div className="footer-section social-section">
          <h3>Social</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      <div className="footer-logo">
      <img src="https://th.bing.com/th/id/OIP.QIg2ejWXEHoJ1xlhx5mQLgHaFe?rs=1&pid=ImgDetMain" />
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
