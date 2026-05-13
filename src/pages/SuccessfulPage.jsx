import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [method, setMethod] = useState("cod");

  return (
    <div className="payment-page">
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
          <button className="navBtn">CART</button>
          <button className="navBtn">ACCOUNT</button>
        </div>
      </nav>

      {/* HEADER */}
      <header className="page-header">
        <h1>PAYMENT METHOD</h1>
      </header>

      {/* MAIN */}
      <main className="payment-container">
        <div className="payment-grid">

          {/* LEFT */}
          <div className="payment-left">

            <section className="payment-box">
              <h3>Select Payment Method</h3>

              <label className="method-option">
                <input
                  type="radio"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                />
                Cash on Pickup
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
            </section>

          </div>

          {/* RIGHT */}
          <div className="payment-right">

            <section className="payment-box">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Number of Items:</span>
                <span>2</span>
              </div>

              <div className="summary-row">
                <span>Items Total:</span>
                <span>₱199.00</span>
              </div>

              <div className="summary-row">
                <span>Discount:</span>
                <span>- ₱50.00</span>
              </div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>₱149.00</span>
              </div>

              <button className="confirm-btn">
                Confirm Payment
              </button>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
};

export default App;