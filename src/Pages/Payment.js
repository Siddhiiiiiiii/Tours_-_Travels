import React from 'react';
import '../CSS/Payment.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <button className="payment-button">Credit Card</button>
      <button className="payment-button">Ether</button>
    </div>
  );
}

export default Payment;
