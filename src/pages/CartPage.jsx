import React, { useState } from "react";
import "./Cart.css"; // Fixed: Added ../ to reach the src folder

// Assets imports - Using the images folder as seen in your file tree
import tuna from "../images/tuna.jpg";
import grilled from "../images/grilled.jpg";
import ham from "../images/ham.jpg";
import bbq from "../images/bbq.jpg";

const CartPage = () => {
  const [page, setPage] = useState("cart");
  const [cart, setCart] = useState([
    { name: "Tuna Melt", price: 7.5, img: tuna, qty: 1 },
  ]);
  const [orderStatus, setOrderStatus] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const updateQty = (name, change) => {
    setCart(
      cart
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty + change } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const total = subtotal + (cart.length > 0 ? 3 : 0);

  const handlePayment = () => {
    if (!paymentMethod) return;
    setPage("tracking");
    setTimeout(() => setOrderStatus(1), 3000);
    setTimeout(() => setOrderStatus(2), 7000);
  };

  return (
    <div className="cart-page-container">
      <div className="titleBox">
        {page === "cart" && "YOUR CART"}
        {page === "payment" && "PAYMENT"}
        {page === "tracking" && "ORDER TRACKING"}
      </div>

      {page === "cart" && (
        <div className="section">
          <div className="cart-content">
            <div className="cart-items">
              {cart.length > 0 ? (
                cart.map((item, i) => (
                  <div className="cart-item" key={i}>
                    <img src={item.img} alt={item.name} className="img-box" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>₱{item.price.toFixed(2)}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => updateQty(item.name, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.name, 1)}>+</button>
                    </div>
                    <button className="secondaryBtn" onClick={() => updateQty(item.name, -item.qty)}>
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>

            {cart.length > 0 && (
              <div className="summary">
                <h3>Order Summary</h3>
                <div className="summary-row"><span>Subtotal</span><span>₱{subtotal.toFixed(2)}</span></div>
                <div className="summary-row"><span>Delivery</span><span>₱3.00</span></div>
                <div className="summary-row total"><span>Total</span><span>₱{total.toFixed(2)}</span></div>
                <button className="primaryBtn" onClick={() => setPage("payment")}>Proceed to Checkout</button>
              </div>
            )}
          </div>
        </div>
      )}

      {page === "payment" && (
        <div className="page-wrapper">
          <div className="payment-card">
            <h2>Total: ₱{total.toFixed(2)}</h2>
            <div className="payment-methods">
              {["gcash", "cash", "card"].map((method) => (
                <button 
                  key={method}
                  className={paymentMethod === method ? "active" : ""} 
                  onClick={() => setPaymentMethod(method)}
                >
                  {method.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="primaryBtn" onClick={handlePayment} disabled={!paymentMethod}>
              Confirm Payment
            </button>
          </div>
        </div>
      )}

      {page === "tracking" && (
        <div className="page-wrapper">
          <div className="tracking-card">
            <p>Payment Method: <strong>{paymentMethod.toUpperCase()}</strong></p>
            <div className="tracking-status">
              <div className={orderStatus >= 0 ? "step active" : "step"}>Preparing</div>
              <div className={orderStatus >= 1 ? "step active" : "step"}>Brewing</div>
              <div className={orderStatus >= 2 ? "step active" : "step"}>Ready</div>
            </div>
            <div className="status-text">
              {orderStatus === 0 && "Preparing your order..."}
              {orderStatus === 1 && "Brewing your coffee..."}
              {orderStatus === 2 && "Ready for pick-up ☕"}
            </div>
            {orderStatus === 2 && (
               <button className="primaryBtn" onClick={() => window.location.href="/"}>Back to Home</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;