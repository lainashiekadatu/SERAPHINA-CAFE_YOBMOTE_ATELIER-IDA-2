import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Café Yobmóté Atelier</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Order Online</a>
          <a href="#">Cart</a>
          <a href="#">Account</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Café Yobmóté Atelier</h1>
          <p>Order desserts and drinks online</p>
          <button className="btn">Order Now</button>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2>Featured Desserts</h2>

        <div className="cards">
          {/* CROISSANT */}
          <div className="card">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/1f/9d/d8/1f9dd8456161804792d1635b8eb8b157.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3>Croissant</h3>
            <p>₱149</p>
            <button>Add to Cart</button>
          </div>

          {/* MACARONS */}
          <div className="card">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/1200x/ce/55/ab/ce55ab4412e8fb060090038b02c83cfc.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3>Macarons</h3>
            <p>₱99</p>
            <button>Add to Cart</button>
          </div>

          {/* TIRAMISU */}
          <div className="card">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/1200x/74/f2/5e/74f25ed1eeadfb8efdca33ee02dac213.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3>Tiramisu</h3>
            <p>₱149</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;