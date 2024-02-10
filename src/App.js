import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';
import Itenary from './components/PackageDetails';
import IndianDestination from './components/IndianDestinations';
import PackageDetails from './components/PackageDetails';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Kerala from './Pages/PackageDetails.js/Kerala';


function App() {

  return (
    <Router>
    <div className="App">
        <Navbar />

        <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Package" element={<Itenary />} />
        <Route path="/Travel" element={<IndianDestination />} />

        {/* <Route path="/package/:id" element={<PackageDetails />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/kerala" element={<Kerala />} />
       
        </Routes>
    </div>
    </Router>
  );
}

export default App;


