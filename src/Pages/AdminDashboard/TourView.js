import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../firebase';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'; 
import DefaultImage from '../../images/FAMILY.png'; 

const TourView = () => {
  const { id } = useParams(); 
  const [tourPackage, setTourPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchTourPackage = async () => {
      try {
        const docRef = doc(db, 'tourPackages', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTourPackage({ id: docSnap.id, ...data });
          setPrice(data.price);
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

  const handleBookNow = () => {
    setShowPaymentOptions(true);
  };
  const handlePaymentOptionSelect = (paymentOption) => {

    const paymentWindow = window.open('', '_blank');
  
    switch (paymentOption) {
      case 'UPI/Card':
        paymentWindow.location.href = 'url/to/upi_card_payment_page';
        break;
      case 'Ether':
        paymentWindow.location.href = 'url/to/ether_payment_page';
        break;
      default:
        break;
    }

    setShowPaymentOptions(false);
  };
  

  return (
    <Container fluid>
      <img src={tourPackage.image || DefaultImage} alt={tourPackage.destination} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} />
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
              <h2 style={{ color: '#ff69b4', textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>{tourPackage.PackageName}</h2>
              <p>{tourPackage.description}</p> 
            </div>
          </Col>
          <Col lg={4}>
            <Card style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '250px',
              height: 'fit-content', 
              marginRight: '20px',
              backgroundColor: '#ffffff',
              marginBottom: '20px', 
            }}>
              <Card.Body>
                <Card.Title>Book Now</Card.Title>
                <Card.Text>Price: {price}</Card.Text> 
                <Button variant="primary" onClick={handleBookNow}>Book Now</Button> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="my-4" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff69b4' }}>Itinerary (Day Wise)</h3>
              <p>{tourPackage.itineraryDayWise}</p> 
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showPaymentOptions} onHide={() => setShowPaymentOptions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Payment Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
    <Button variant="primary" onClick={() => handlePaymentOptionSelect('UPI/Card')}>UPI/Card</Button>
    <Button variant="primary" onClick={() => handlePaymentOptionSelect('Ether')}>Ether</Button>
  </div>
</Modal.Body>
      </Modal>
    </Container>
  );
};

export default TourView;
