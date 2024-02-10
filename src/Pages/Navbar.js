// Navbar.js

import React from 'react';
import '../CSS/Navbar.css';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'your_logo.png' with the path to your logo image */}
        <img src={logo}
        alt='Siddhesh Tours and Travels' />
        {/* <span> Siddhesh TOURS AND TRAVELS </span> */}
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Gallery">Gallery</a>
        <a href="/Login">Login</a>
        <a href="/Register" style={{ color: 'red', background: 'white' }}>Book NOW</a>
      </div>
    </div>
  );
};

export default Navbar;
