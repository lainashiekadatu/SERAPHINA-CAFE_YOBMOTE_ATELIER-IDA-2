import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./NavBar.jsx"; 
import MenuPage from "./pages/Menu.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Contact from "./pages/Contact.jsx";

function HomePage() {
  return (
    <div className="home-page-container">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Café Yobmóté Atelier</h1>
          <p>Order desserts and drinks online</p>
          <Link to="/menu" className="btn-hero">Order Now</Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        {/* Ang NavBar ay nasa labas ng Routes para laging visible */}
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;