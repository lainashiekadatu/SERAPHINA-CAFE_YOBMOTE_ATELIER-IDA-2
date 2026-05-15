import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SuccessfulPage.css"; 

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderItems = [], total = 0, fromPayment = false } = location.state || {};
  
  // Tracking State dito na nakalagay
  const [orderStatus, setOrderStatus] = useState(0);
  const [showTracking, setShowTracking] = useState(false);

  useEffect(() => {
    if (fromPayment) {
      // Simulating the brewing process habang nasa receipt page
      const timer1 = setTimeout(() => setOrderStatus(1), 5000); // Brewing after 5s
      const timer2 = setTimeout(() => setOrderStatus(2), 10000); // Ready after 10s
      return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }
  }, [fromPayment]);

  return (
    <div className="successPage">
      <div className="successHeader">
        <h1>ORDER SUCCESSFUL!</h1>
        <p>Thank you for choosing Café Yobmóté Atelier ☕</p>
        <div className="orderMeta">Order #12345 • Pickup</div>
      </div>

      {/* RENDER NG RECEIPT (MAUUNA ITO) */}
      <div className="receiptCard">
        <h3>Order Summary</h3>
        {orderItems.map((item, index) => (
          <div className="itemRow" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="itemInfo">
              <h4>{item.name}</h4>
              <p>Qty: {item.qty}</p>
            </div>
            <div className="price">₱{(item.price * item.qty).toFixed(2)}</div>
          </div>
        ))}
        <div className="totals">
          <div className="row totalRow">
            <span>Total Paid:</span>
            <span>₱{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* OPTIONAL: TRACKING VIEW (LALABAS LANG PAG PININDOT O AUTOMATIC) */}
      {!showTracking ? (
        <div className="actions">
          <button className="secondaryBtn" onClick={() => setShowTracking(true)}>
            Track Order Status
          </button>
          <button className="primaryBtn" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      ) : (
        <div className="deliveryCard">
          <h4>Order Status</h4>
          <div className="tracking-status" style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
             <span style={{color: orderStatus >= 0 ? 'var(--deep-brown)' : '#ccc', fontWeight: 'bold'}}>Preparing</span>
             <span style={{color: orderStatus >= 1 ? 'var(--deep-brown)' : '#ccc', fontWeight: 'bold'}}>Brewing</span>
             <span style={{color: orderStatus >= 2 ? 'var(--deep-brown)' : '#ccc', fontWeight: 'bold'}}>Ready</span>
          </div>
          <p className="status-text" style={{textAlign: 'center', fontStyle: 'italic'}}>
              {orderStatus === 0 && "We're preparing your ingredients..."}
              {orderStatus === 1 && "Your coffee is now brewing! ☕"}
              {orderStatus === 2 && "Your order is ready for pick-up! 🎉"}
          </p>
          <button className="primaryBtn" style={{marginTop: '20px'}} onClick={() => navigate("/")}>Back to Menu</button>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;