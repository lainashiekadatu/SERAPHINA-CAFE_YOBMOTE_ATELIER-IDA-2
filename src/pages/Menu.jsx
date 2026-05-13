import React, { useState } from 'react';
import './Menu.css'; 

// IMAGE IMPORTS (Double check these filenames in your folder!)
import pesto from "../images/pesto.jpg"; 
import alfredo from "../images/alfredo.jpg"; 
import carbonara from "../images/carbonara.jpg"; 
import aglio from "../images/aglio.jpg"; 
import bulgogi from "../images/bulgogi.jpg"; 
import lemonade from "../images/lemonade.jpg"; 
import iced from "../images/iced.jpg"; 
import strawberry from "../images/strawberry.jpg"; 
import mango from "../images/mango.jpg"; 
import fruit from "../images/fruit.jpg"; 
import lychee from "../images/lychee.jpg"; 
import green from "../images/green.jpg"; 
import ccf from "../images/ccf.jpg"; 
import passion from "../images/passion.jpg"; 

const MenuPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const menuData = [
    // --- COFFEE ---
    { id: 1, name: "Espresso", category: "Coffee", price: 3.00, image: "" },
    { id: 2, name: "Americano", category: "Coffee", price: 3.50, image: "" },
    { id: 3, name: "Latte", category: "Coffee", price: 4.75, image: "" },
    { id: 4, name: "Cappuccino", category: "Coffee", price: 4.50, image: "" },
    { id: 5, name: "Caramel Macchiato", category: "Coffee", price: 5.25, image: "" },
    { id: 6, name: "Mocha", category: "Coffee", price: 5.00, image: "" },
    { id: 7, name: "Vanilla Latte", category: "Coffee", price: 5.00, image: "" },

    // --- NON-COFFEE ---
    { id: 8, name: "Chocolate Drink", category: "Non-Coffee", price: 4.50, image: "" },
    { id: 9, name: "Matcha Latte", category: "Non-Coffee", price: 5.00, image: "" },
    { id: 10, name: "Strawberry Milk", category: "Non-Coffee", price: 4.75, image: "" },
    { id: 11, name: "Iced Tea (Lemon/Peach)", category: "Non-Coffee", price: 3.75, image: "" },

    // --- FRAPPE ---
    { id: 12, name: "Coffee Frappe", category: "Frappe", price: 5.50, image: "" },
    { id: 13, name: "Caramel Frappe", category: "Frappe", price: 5.75, image: "" },
    { id: 14, name: "Mocha Frappe", category: "Frappe", price: 5.75, image: "" },
    { id: 15, name: "Matcha Frappe", category: "Frappe", price: 6.00, image: "" },
    { id: 16, name: "Cookies & Cream Frappe", category: "Frappe", price: 6.00, image: ccf },

    // --- REFRESHERS ---
    { id: 41, name: "Lychee", category: "Refreshers", price: 4.50, image: lychee },
    { id: 17, name: "Fruit Tea", category: "Refreshers", price: 4.25, image: fruit },
    { id: 18, name: "Lemonade", category: "Refreshers", price: 4.00, image: lemonade },
    { id: 19, name: "Iced Tea", category: "Refreshers", price: 3.50, image: iced },
    { id: 20, name: "Strawberry Drink", category: "Refreshers", price: 4.50, image: strawberry },
    { id: 21, name: "Mango Drink", category: "Refreshers", price: 4.50, image: mango },
    { id: 42, name: "Green Apple", category: "Refreshers", price: 4.50, image: green },
    { id: 43, name: "Passion Fruit", category: "Refreshers", price: 4.50, image: passion },

    // --- PASTRIES ---
    { id: 22, name: "Cookies", category: "Pastries", price: 2.50, image: "" },
    { id: 23, name: "Brownies", category: "Pastries", price: 3.00, image: "" },
    { id: 24, name: "Waffle", category: "Pastries", price: 4.00, image: "" },
    { id: 25, name: "Croissant", category: "Pastries", price: 3.50, image: "" },
    { id: 26, name: "Donuts", category: "Pastries", price: 2.00, image: "" },
    { id: 27, name: "Cinnamon Roll", category: "Pastries", price: 4.00, image: "" },
    { id: 28, name: "Muffins", category: "Pastries", price: 3.25, image: "" },
    { id: 29, name: "Macaroons", category: "Pastries", price: 1.50, image: "" },

    // --- PASTA ---
    { id: 30, name: "Carbonara", category: "Pasta", price: 10.50, image: carbonara },
    { id: 31, name: "Pesto", category: "Pasta", price: 9.75, image: pesto },
    { id: 32, name: "Alfredo", category: "Pasta", price: 10.00, image: alfredo },
    { id: 39, name: "Aglio e Olio", category: "Pasta", price: 10.00, image: aglio },
    { id: 40, name: "Bulgogi", category: "Pasta", price: 10.00, image: bulgogi },

    // --- SANDWICHES ---
    { id: 33, name: "Tuna Melt", category: "Sandwiches", price: 7.50, image: "" },
    { id: 34, name: "Grilled Cheese", category: "Sandwiches", price: 6.00, image: "" },
    { id: 35, name: "Ham & Cheese", category: "Sandwiches", price: 7.00, image: "" },
    { id: 36, name: "BBQ Chicken", category: "Sandwiches", price: 8.50, image: "" },
    { id: 37, name: "Egg Salad", category: "Sandwiches", price: 6.50, image: "" },
    { id: 38, name: "Smoked Salmon", category: "Sandwiches", price: 11.00, image: "" },
  ];

  const categories = ["All", "Coffee", "Frappe", "Pasta"];

  return (
    <div className="menu-interface">
      <div className="top-bar">
        <h2 className="section-title">Our Menu</h2>
        <div className="cart-badge">
          <span>🛒 {cartCount} Items</span>
        </div>
      </div>

      <div className="filter-shelf">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-tag ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="items-grid">
        {menuData.filter(item => activeCategory === "All" || item.category === activeCategory).map(item => (
          <div key={item.id} className="item-card">
            <div className="image-frame">
              <img src={item.image} alt={item.name} onError={(e) => e.target.src='https://via.placeholder.com/150'} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">₱{item.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => setCartCount(prev => prev + 1)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;