import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const NavBar = () => {
  return (
    <header className="navbar">
      {/* Added 'Atelier' back in */}
      <div className="logo">Café Yobmôté Atelier</div>
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">CART (0)</Link>
        <Link to="/account">ACCOUNT</Link>
      </nav>
    </header>
  );
};

export default NavBar;