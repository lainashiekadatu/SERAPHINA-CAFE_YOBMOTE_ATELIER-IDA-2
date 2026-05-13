import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

// 1. Idagdag ang { cartCount } sa loob ng parenthesis
const NavBar = ({ cartCount }) => {
  return (
    <header className="navbar">
      {/* Added 'Atelier' back in */}
      <div className="logo">Café Yobmôté Atelier</div>
      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        
        {/* 2. Palitan ang (0) ng ({cartCount}) */}
        <Link to="/cart">CART ({cartCount})</Link>
        
        
        <Link to="/account">ACCOUNT</Link>  
        </nav>
    </header>
  );
};

export default NavBar;