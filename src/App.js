import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />

        <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Payment" element={<Payment />} />

        </Routes>
     {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;


