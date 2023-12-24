import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Home.css';
import packageImage from '../images/package.png';

const Home = () => {

  const images = [
    'https://yesofcorsa.com/wp-content/uploads/2018/03/Trip-Around-The-World-Wallpaper.jpg',
    'https://th.bing.com/th/id/OIP.-IP7Iodxb68_VJkZAi5FkQHaDL?rs=1&pid=ImgDetMain',
    'https://i.pinimg.com/originals/05/65/9d/05659d9df95f78b36bb55b17bc9bc874.jpg',
    // Add more image URLs as needed
  ];

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
    <div className="container">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          {/* Card content goes here */}
          <h3>Card 1</h3>
          <p>Card content goes here.</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          {/* Card content goes here */}
          <h3>Card 2</h3>
          <p>Card content goes here.</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          {/* Card content goes here */}
          <h3>Card 3</h3>
          <p>Card content goes here.</p>
        </div>
      </div>

      <div className='image-container'>
      <img src={packageImage} alt="Package" />
      </div>
    </div>
  );
};

export default Home;
