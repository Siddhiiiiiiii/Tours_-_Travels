// Navbar.js

import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'your_logo.png' with the path to your logo image */}
        <img src="https://th.bing.com/th/id/OIP.QIg2ejWXEHoJ1xlhx5mQLgHaFe?rs=1&pid=ImgDetMain" />
        <span> SIDHVED TOURS AND TRAVELS </span>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Payment">Payment</a>
        <a href="/Login">Login</a>
        <a href="/Register" style={{ color: 'red', background: 'white' }}>Register</a>
      </div>
    </div>
  );
};

export default Navbar;
