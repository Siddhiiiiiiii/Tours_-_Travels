import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />

        <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
     
    </div>
    </Router>
  );
}

export default App;


