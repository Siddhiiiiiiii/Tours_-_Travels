import React, { useState, useEffect, useRef } from 'react';
import './StyledComponent.css';
import QRCode from '../images/qr.jpg'; // Import your QR code image here

const PaymentPage = () => {
    const [countdownTime, setCountdownTime] = useState(1704);
    const timerIntervalRef = useRef(null); // Use useRef for timerInterval

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

    const updateCountdown = () => {
        if (countdownTime > 0) {
            setCountdownTime(prevCountdownTime => prevCountdownTime - 1);
        } else {
            clearInterval(timerIntervalRef.current);
            // Handle payment status check here
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
        }
    };

    useEffect(() => {
        timerIntervalRef.current = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(timerIntervalRef.current);
        };
    }, []);

    const onMainButtonClick = async () => {
        const etherPrice = await fetchEtherPrice();
        if (etherPrice !== null) {
            const rupeesToEther = 10000 / etherPrice;
            alert(`You need to pay ${rupeesToEther.toFixed(4)} ether and amount copied to clipboard`);
            navigator.clipboard.writeText(rupeesToEther.toFixed(4))
                .then(() => {
                    console.log('Copied to clipboard:', rupeesToEther.toFixed(4));
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                });
            window.open('https://portfolio.metamask.io/send');
            document.querySelector('.metamask-button').setAttribute('amount', rupeesToEther.toFixed(4));
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="payment-wrapper">
            <div className="payment-container">
                <div className="payment-content">
                    <div className="payment-header">
                        <h1>Payment</h1>
                        <div className="countdown-container">
                            <p className="countdown" id="countdown"> Holding Time: {formatTime(countdownTime)}</p>
                        </div>
                    </div>
                    <div className="payment-info">
                        <p className="p1"><b>Transfer Funds now!</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Amount: 0.103821 ETH (Mainnet)<br /></p>
                        <p className="p2">Transfer funds to the wallet address below within the next 40 minutes to complete your reservation.</p>
                        <div className="sub-box">
                            <div className="qr-code-container">
                                <img src={QRCode} alt="QR Code" className="qr-code" />
                            </div>
                            <div className="network-address">
                                <p>Network: MAINNET<br /><br /></p>
                                <p>Address: <br />0x42DbA2E3E71CA92788A2C9C9EcBf7FBA229D108b</p>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="payment-1-buttons">
                                <button id="cancel-btn" className="cancel-order-button">Cancel order</button>
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
                                {/* Metamask transaction button */}
                                <div
                                    className="metamask-button"
                                    address="0x2b7dF997E54CD20a9fFa5AC460D0A9FBD5fB0c09"
                                    amount="0.005"
                                    successcallback="onSuccess"
                                    errorcallback="onError"
                                ></div>
                                {/* End of Metamask transaction button */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Script for Metamask transaction button */}
            <script dangerouslySetInnerHTML={{ __html: `
                const cancelButton = document.getElementById('cancel-btn');
                cancelButton.addEventListener('click', () => {
                    console.log('Order canceled');
                });
            `}} />
            {/* Include Metamask script tag */}
            <script src="https://cdn.rawgit.com/pierregoutheraud/metamask-transaction-button/6ebebf41/build/static/js/mtb.js"></script>
        </div>
    );
};

export default PaymentPage;
