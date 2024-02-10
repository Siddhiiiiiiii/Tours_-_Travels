import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Home.css';
import packageImage from '../images/package.png';
import Carousel from '../components/Carousel';
import Welcome from '../components/Welcome';
import IndianDestination from '../components/IndianDestinations';
import Siddhesh from '../images/siddhesh.png';
import Feedback from '../images/feedback.png';
import Contact from '../images/CONTACT.png';

const Home = () => {

 
  return (
    <div>
     <Carousel/>

     {/* <Welcome/> */}

     <IndianDestination/>
     <img src={Siddhesh}/>
     <img src={Contact}/>

     <img src={Feedback}/>
     

         
    </div>
  );
};

export default Home;
