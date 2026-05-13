import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [method, setMethod] = useState("cod");

  return (
    <div className="payment-page">
      {/* UPDATED NAVBAR TO MATCH IMAGE */}
      <nav className="navbar">
        <div className="brand">
          CAFÉ YOBMÔTÉ ATELIER
        </div>
        <div className="navLinks">
          <button className="navBtn">HOME</button>
          <button className="navBtn">MENU</button>
          <button className="navBtn">ABOUT US</button>
          <button className="navBtn">CONTACT</button>
          <button className="navBtn">ORDER ONLINE</button>
          <button className="navBtn">CART (0)</button>
          <button className="navBtn">ACCOUNT</button>
        </div>
      </nav>

      {/* HEADER BANNER */}
      <header className="page-header">
        <h1>PAYMENT METHOD</h1>
      </header>

      {/* MAIN LAYOUT GRID */}
      <main className="payment-container">
        <div className="payment-grid">
          
          {/* LEFT: PAYMENT & PROMO */}
          <div className="payment-left">
            <section className="payment-box">
              <h3>Select Payment Method</h3>
              <label className="method-option">
                <input 
                  type="radio" 
                  checked={method === "cod"} 
                  onChange={() => setMethod("cod")} 
                />
                Cash on Delivery
              </label>
              <label className="method-option">
                <input 
                  type="radio" 
                  checked={method === "ewallet"} 
                  onChange={() => setMethod("ewallet")} 
                />
                E-Wallet
              </label>
              <label className="method-option">
                <input 
                  type="radio" 
                  checked={method === "card"} 
                  onChange={() => setMethod("card")} 
                />
                Credit Card
              </label>
            </section>

            <section className="payment-box">
              <h3>Promo Code</h3>
              <div className="promo-group">
                <input type="text" placeholder="Enter promo code" />
                <button className="apply-btn">Apply</button>
              </div>
              <span className="annotation" style={{textAlign: 'left'}}>
                (Annotation: onClick Apply - update total)
              </span>
            </section>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="payment-right">
            <section className="payment-box">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Items Total:</span>
                <span>$18.75</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>$3.00</span>
              </div>
              
              <div className="summary-row total">
                <span>Final Total:</span>
                <span>$21.75</span>
              </div>

              <button className="confirm-btn">
                Confirm Payment
              </button>
              <span className="annotation">
                (Annotation: onClick - navigate to /success)
              </span>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PaymentPage;