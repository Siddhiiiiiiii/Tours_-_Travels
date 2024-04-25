import React, { useEffect, useState } from 'react';
import '../CSS/Paymentether.css'; // Import your CSS file
import Qrimage from '../images/qr.jpg';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

function PaymentPage() {
  const [price, setPrice] = useState(0); // State to hold the price
  const [countdownTime, setCountdownTime] = useState(1704); // State to hold countdown time
  const [currentTime, setCurrentTime] = useState(new Date()); // State to hold current time
  const [convertedPrice, setConvertedPrice] = useState(0); // State to hold converted price
  let timerInterval;

  // Use useLocation to get the location object from React Router
  const location = useLocation();

  useEffect(() => {
    // Extract the price from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const priceParam = searchParams.get('price');
    // Update the price state
    setPrice(parseFloat(priceParam));

    // Update current time every second
    timerInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Load MetaMask Transaction Button script
    const script = document.createElement('script');
    script.src = 'https://cdn.rawgit.com/pierregoutheraud/metamask-transaction-button/6ebebf41/build/static/js/mtb.js';
    script.async = true;
    document.body.appendChild(script);

    return () => clearInterval(timerInterval);
  }, [location]);

  useEffect(() => {
    // After component mount, update metamask-button attribute if it exists
    const metamaskButton = document.querySelector('.metamask-button');
    if (metamaskButton) {
      metamaskButton.setAttribute('amount', convertedPrice.toString());
    }
  }, [convertedPrice]);

  useEffect(() => {
    // Fetch and set the converted price
    const fetchConvertedPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        const ethPriceInUSD = data.ethereum.usd;
        const ethPriceInINR = await fetchEtherPrice();
        if (ethPriceInINR !== null) {
          const rupeesToEth = price / ethPriceInINR;
          const ethToUSD = rupeesToEth * ethPriceInUSD;
          setConvertedPrice(ethToUSD);
        } else {
          console.error('Failed to fetch ETH price in INR');
        }
      } catch (error) {
        console.error('Failed to fetch ETH price in USD:', error);
      }
    };

    fetchConvertedPrice();
  }, [price]);

  const fetchEtherPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
      const data = await response.json();
      return data.ethereum.inr;
    } catch (error) {
      console.error('Failed to fetch Ether price:', error);
      return null;
    }
  };

  const onMainButtonClick = async () => {
    // Remaining code...
  };

  const cancelButtonHandler = () => {
    console.log('Order canceled');
  };

  const calculateRemainingTime = (endTime) => {
    const difference = endTime.getTime() - currentTime.getTime();
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const endTime = new Date(currentTime.getTime() + countdownTime * 1000);

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-content">
          <div className="payment-header">
            <h1>Payment</h1>
            <div className="countdown-container">
              <p className="countdown" id="countdown"> Holding Time: {calculateRemainingTime(endTime)} </p>
            </div>
          </div>
          <div className="payment-info">
            <p className="p1"><b>Transfer Funds now!</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Amount: {price} ETH (Mainnet)<br /></p>
            <p className="p2">Transfer funds to the wallet address below within the next 40 minutes to complete your reservation.</p>
            <div className="sub-box">
              <div className="qr-code-container">
                <img src={Qrimage} alt="QR Code" className="qr-code" />
              </div>
              <div className="network-address">
                <p>Network: MAINNET<br /><br /></p>
                <p>Address: <br />0x9c4345C4fAEbBD3A8bC23dAEAEA652861685b436</p>
              </div>
            </div>
            <div className="button-container">
              <div className="payment-1-buttons">
                <button id="cancel-btn" className="cancel-order-button" onClick={cancelButtonHandler}>Cancel order</button>
                <a href="booking-summary.html" className="summary-button">Go to booking summary</a>
              </div>
            </div>
          </div>
          <div className="status-message-container">
            <p className="status-message"></p>
            <p className="error-message"></p>
          </div>
        </div>
      </div>

      <span className="or-text"><b>OR</b></span>

      <div className="payment-container">
        <div className="payment-content">
          <div className="second-payment">
            <h2> Metamask Wallet</h2>
            <div className="button-container">
              <div className="payment-2">
                <button onClick={onMainButtonClick}>Main Transaction Button</button>
                <div className="metamask-button" address="0x9c4345C4fAEbBD3A8bC23dAEAEA652861685b436" amount={convertedPrice} success-callback="onSuccess" error-callback="onError"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
