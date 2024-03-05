import React from 'react';
import { Link } from 'react-router-dom';

const Family = () => {
    const itineraryData = [
        { id: 1, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 2, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 3, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 4, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 5, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 6, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 7, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 8, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 9, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 10, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 11, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 12, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 13, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 14, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 15, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 16, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 17, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 18, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
        { id: 19, destination: 'Lakshadweep', price: '₹15,000', duration: '12D/13N', image: 'https://th.bing.com/th/id/OIP.n6I6bh0IC4MDpq7IhJY6XQHaEo?rs=1&pid=ImgDetMain', description: 'Explore the beautiful islands of Lakshadweep with our special family package.' },
        { id: 20, destination: 'Maharashtra', price: '₹10,000', duration: '10D/11N', image: 'https://th.bing.com/th/id/OIP.7JhMLhC5_NST8k5tTj7SHwHaEj?rs=1&pid=ImgDetMain', description: 'Discover the rich cultural heritage and scenic beauty of Maharashtra with our family package.' },
            
        // Add more packages as needed
    ];
    return (
      <div className="container">
      <h1 className="mt-5 mb-4">Special Family Packages</h1>
      {itineraryData.map(item => (
        <Link key={item.id} to={`/package/${item.id}`} className="text-decoration-none text-dark">
          <div className="row mb-4 border p-3">
            <div className="col-md-4">
              <img src={item.image} alt={item.destination} className="img-fluid" />
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-end">
              <div className="text-right">
                <h3>{item.destination}</h3>
                <p>{item.description}</p>
              </div>
              <div style={verticalLineStyle}></div>
              <div>
                <p><strong>Tour Duration:</strong> {item.duration}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <button className="btn btn-primary">View Tour</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

  
  // Inline CSS styles using template literals
  const verticalLineStyle = {
    borderLeft: '1px solid #ccc',
    height: '100%',
    margin: '0 15px', // Adjust the margin as needed
  };
  
  export default Family;


