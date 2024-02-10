import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Carousel.css';
import kedarnath from '../images/KEDARNATH.png';
import Honeymoon from '../images/HONEYMOON.png';
import Family from '../images/FAMILY.png';
import Indian from '../images/INDIAN.png';

const Carousel = () => {
  const images = [kedarnath, Honeymoon, Family, Indian];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed (in milliseconds)
  };

  return (
    <div className="container-fluid" >
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
