// TravelCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom'; // Import Link from react-router-dom
import PackageDetails from './PackageDetails';
import '../CSS/IndianDestination.css';

const IndianDestination = () => {
  const itineraryData = [
    { id: 1, destination: 'Lakshadweep', price: '₹15,000', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain' },
    { id: 2, destination: 'Maharashtra', price: '₹10,000', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain' },
    { id: 3, destination: 'Kerala', price: '₹25,000', image: 'https://th.bing.com/th/id/OIP.5dDv8nSUNky8zIYEsRRwNwHaE7?rs=1&pid=ImgDetMain' },
    { id: 4, destination: 'Kashmir', price: '₹12,000', image: 'https://th.bing.com/th/id/OIP.91c7RXw2TZmN8A2v1ogx7gHaE8?rs=1&pid=ImgDetMain' },
    { id: 5, destination: 'Gujrat', price: '₹10,000', image: 'https://th.bing.com/th/id/OIP.JoIeMRvvu77-hZOH4UStugHaFj?rs=1&pid=ImgDetMain' },
    { id: 6, destination: 'Himachal', price: '8,000', image: 'https://www.tourmyindia.com/blog/wp-content/uploads/2014/07/holidays-in-himachal-pradesh-destinations-that-attract-traveller.png' },
    { id: 7, destination: 'Assam', price: '₹20,000', image: 'https://www.kewlquiz.com/wp-content/uploads/2020/11/The-Tea-of-Assam.jpg' },
    { id: 8, destination: 'Bengal', price: '₹15,000', image: 'https://th.bing.com/th/id/OIP.SfwX0Sjr3s8sGAPWdtbafwHaEo?rs=1&pid=ImgDetMain' },
    { id: 9, destination: 'Rajasthan', price: '₹10,000', image: 'https://target-tours.com/heigh_lights/rajasthan-tour-banner.jpg' },
    { id: 10, destination: 'Banaras', price: '8,000', image: 'https://th.bing.com/th/id/OIP.tuhyx9xVvlwDiBbvll654gHaE8?rs=1&pid=ImgDetMain' },
    
    // Add more destinations as needed
  ];

  // Function to group itinerary data into sets of 5
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Group itinerary data into sets of 5
  const groupedItinerary = chunkArray(itineraryData, 5);

  return (
    <div className="container-fluid mt-5 border">
      <h2 className="text-center mb-4">Explore and Experience the rich Indian Culture.....</h2>
      <p>India is a beautiful land of rich diversity, culture, and adventures. It is the seventh-largest country in the world.</p>
      <Carousel indicators={false} interval={null}>
        {groupedItinerary.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="d-flex justify-content-between">
              {group.map((card) => (
                <Link
                  key={card.id}
                  to={`/kerala`} // Set up the link to the details page with package ID
                  className="carousel-card"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <h3>{card.destination}</h3>
                  <p>Starting Price <br />{card.price}</p>
                </Link>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
       {/* Add Route for PackageDetails */}
       {/* <Route path="/package/:id">
        <PackageDetails itineraryData={itineraryData} />
      </Route> */}
    </div>
  );
};


export default IndianDestination;