import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./NavBar.jsx"; 
import MenuPage from "./pages/Menu.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Contact from "./pages/Contact.jsx";
import AccountPage from "./pages/AccountPage.jsx";

function HomePage() {
  return (
    <div className="home-page-container">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Café Yobmóté Atelier</h1>
          <p>Order desserts and drinks online</p>
          <Link to="/menu" className="btn">Order Now</Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  // Global Cart State
  const [cart, setCart] = useState([]);

  // Function para magdagdag ng item sa cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      // I-match ang 'image' mula menu sa 'img' property ng cart
      return [...prevCart, { ...item, img: item.image, qty: 1 }];
    });
  };

  return (
    <Router>
      <div className="main-wrapper">
        {/* Ipinasa ang cartCount sa NavBar para sa notification badge */}
        <NavBar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;