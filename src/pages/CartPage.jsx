import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; 

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState("cart");
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

  const total = cart.reduce((a, b) => a + (b.price * b.qty), 0);

  const handlePayment = () => {
    if (!paymentMethod) return;

    const finalOrder = [...cart];
    const finalTotal = total;

    setCart([]); // Clear cart for Navbar update

    navigate("/success", { 
      state: { 
        orderItems: finalOrder, 
        total: finalTotal,
        paymentMethod: paymentMethod,
        fromPayment: true 
      } 
    });
  };

  return (
    <div className="cart-page-container">
      <div className="titleBox">
        {page === "cart" ? "YOUR CART" : "PAYMENT"}
      </div>

      {page === "cart" && (
        <div className="section">
          {cart.length > 0 ? (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item, i) => (
                  <div className="cart-item" key={i}>
                    <img src={item.img} alt={item.name} className="img-box" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>₱{item.price.toFixed(2)}</p>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => updateQty(item.name, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.name, 1)}>+</button>
                    </div>
                    <div className="item-total">
                       ₱{(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary">
                <h3>Order Summary</h3>
                <div className="summary-row total">
                  <span>Total Amount</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
                <button className="primaryBtn" onClick={() => setPage("payment")}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-cart-wrapper">
              <div className="empty-cart-content">
                <div className="empty-icon">☕</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't discovered your favorite blend yet.</p>
                <button className="primaryBtn" onClick={() => navigate("/menu")}>
                  EXPLORE OUR MENU
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {page === "payment" && (
        <div className="page-wrapper">
          <div className="payment-card">
            <h3 className="payment-title">Select Payment Method</h3>
            <h2 className="payment-amount" style={{fontSize: '2rem', margin: '10px 0 30px'}}>
                ₱{total.toFixed(2)}
            </h2>
            
            <div className="payment-methods">
              {["gcash", "cash", "card"].map((method) => (
                <button 
                  key={method}
                  className={paymentMethod === method ? "method-btn active" : "method-btn"} 
                  onClick={() => setPaymentMethod(method)}
                >
                  {method.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="payment-actions">
                <button className="secondaryBtn" onClick={() => setPage("cart")}>
                    BACK
                </button>
                <button 
                    className="primaryBtn" 
                    onClick={handlePayment} 
                    disabled={!paymentMethod}
                >
                    CONFIRM & VIEW RECEIPT
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;