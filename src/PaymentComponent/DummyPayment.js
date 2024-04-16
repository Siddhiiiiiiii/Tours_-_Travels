import React, { useState, useEffect } from 'react';
import './StyledComponent.css'; // Import your CSS file

const DummyPayment = () => {
  const [countdownTime, setCountdownTime] = useState(1704);
  const [amountToCopy, setAmountToCopy] = useState('');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

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
    const etherPrice = await fetchEtherPrice();
    if (etherPrice !== null) {
      const rupeesToEther = 10000 / etherPrice;
      setAmountToCopy(rupeesToEther.toFixed(4));
      alert(`You need to pay ${rupeesToEther.toFixed(4)} ether and amount copied to clipboard`);
      navigator.clipboard.writeText(rupeesToEther.toFixed(4))
        .then(() => {
          console.log('Copied to clipboard:', rupeesToEther.toFixed(4));
        })
        .catch(err => {
          console.error('Failed to copy:', err);
        });
      window.open('https://portfolio.metamask.io/send');
    }
  };

  const updateCountdown = () => {
    setCountdownTime(prevTime => {
      if (prevTime > 0) {
        return prevTime - 1;
      } else {
        fetch('/check-payment-status')
          .then(response => response.json())
          .then(data => {
            if (data.status === 'success') {
              console.log('Payment successful!');
              const statusMessage = document.querySelector('.status-message');
              statusMessage.textContent = 'Payment successful! Your reservation is confirmed.';
            } else {
              console.error('Payment failed:', data.error);
              const errorMessage = document.querySelector('.error-message');
              errorMessage.textContent = 'Payment failed! Please try again or contact support.';
            }
          })
          .catch(error => {
            console.error('Error fetching payment status:', error);
          });
        return 0;
      }
    });
  };

  return (
    <div className="payment-wrapper">
      {/* ... rest of the code ... */}
    </div>
  );
};

export default DummyPayment;