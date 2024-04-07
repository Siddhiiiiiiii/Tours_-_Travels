import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions for querying documents
import { db } from '../firebase'; // Import your firebase configuration
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import Bootstrap components
import DefaultImage from '../../images/FAMILY.png'; // Import your static image

const TourView = () => {
  const { id } = useParams(); // Extract the tour package ID from the URL params
  const [tourPackage, setTourPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourPackage = async () => {
      try {
        const docRef = doc(db, 'tourPackages', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTourPackage({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Tour package not found');
        }
      } catch (error) {
        setError('Error fetching tour package');
        console.error('Error fetching document: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourPackage();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Render an error message if an error occurred
  }

  if (!tourPackage) {
    return <div>No tour package found</div>; // Render a message if no tour package is found
  }

  return (
    <Container fluid>
      {/* Image */}
      <img src={tourPackage.image || DefaultImage} alt={tourPackage.destination} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} />

      {/* Main content */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
              {/* Package Name */}
              <h2 style={{ color: '#ff69b4', textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>{tourPackage.PackageName}</h2>
              
              {/* Description */}
              <p>{tourPackage.description}</p> {/* Display tour package description */}

              {/* Other tour package details can be displayed here */}
            </div>
          </Col>
          <Col lg={4}>
            {/* Booking Card */}
            <Card style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '250px',
              height: 'fit-content', // Adjusted height to fit content
              marginRight: '20px',
              backgroundColor: '#ffffff',
              marginBottom: '20px', // Add margin bottom
            }}>
              <Card.Body>
                <Card.Title>Book Now</Card.Title>
                <Card.Text>Price: {tourPackage.price}</Card.Text> {/* Display tour package price */}
                <Button variant="primary">Book Now</Button> {/* Reverted to default style */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Responsive Break */}
        <Row>
          <Col>
            <hr className="my-4" />
          </Col>
        </Row>

        {/* Itinerary (Day Wise) */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff69b4' }}>Itinerary (Day Wise)</h3>
              <p>{tourPackage.itineraryDayWise}</p> {/* Display tour package itinerary day-wise */}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TourView;
