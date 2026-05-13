import { useState } from 'react';

// Adjusted paths to point to '../images/' based on your file structure
import tunaMelt from '../images/tunaMelt.jpg';
import grilledCheese from '../images/grilledCheese.jpg';
import hamCheese from '../images/hamCheese.jpg';
import bbq from '../images/bbq.jpg';
import eggSalad from '../images/eggSalad.jpg';
import smokedSalmon from '../images/smokedSalmon.jpg';

import chocoDrink from '../images/chocoDrink.jpg';
import matchaLatte from '../images/matchaLatte.jpg';
import Strawberry from '../images/Strawberry.jpg';
import icedTea from '../images/icedTea.jpg';
import chaiLatte from '../images/chaiLatte.jpg';
import CookiesCream from '../images/CookiesCream.jpg';
import hotMilk from '../images/hotMilk.jpg';
import darkChoco from '../images/darkChoco.jpg';
import vanillaM from '../images/vanillaM.jpg';

import CoffeeF from '../images/CoffeeF.jpeg';
import caramelF from '../images/caramelF.jpeg';
import mochaF from '../images/mochaF.jpeg';
import matchaF from '../images/matchaF.jpeg';
import ccF from '../images/ccF.jpeg';

import cookies from '../images/cookies.jpeg';
import brownies from '../images/brownies.jpeg';
import waffle from '../images/waffle.jpeg';
import croissant from '../images/croissant.jpeg';
import donuts from '../images/donuts.jpeg';
import cinnamon from '../images/cinnamon.jpeg';
import muffins from '../images/muffins.jpeg';
import macaroons from '../images/macaroons.jpeg';

import carbonara from '../images/carbonara.jpeg';
import pesto from '../images/pesto.jpeg';
import alfredo from '../images/alfredo.jpeg';
import bulgogi from '../images/bulgogi.jpeg';
import aglio from '../images/aglio.jpeg';

import fruit from '../images/fruit.jpeg';
import lemonade from '../images/lemonade.jpeg';
import icedT from '../images/icedT.jpeg';
import straw from '../images/straw.jpeg';
import mango from '../images/mango.jpeg';
import passion from '../images/passion.jpeg';
import lychee from '../images/lychee.jpeg';
import green from '../images/green.jpeg';

import espresso from '../images/espresso.png';
import americano from '../images/americano.png';
import latte from '../images/latte.png';
import cappuccino from '../images/cappuccino.png';
import caramel from '../images/caramel.png';
import mocha from '../images/mocha.png';
import vanilla from '../images/vanilla.png';
import hazelnut from '../images/hazelnut.png';
import spanish from '../images/spanish.png';
import flat from '../images/flat.png';
import icedLatte from '../images/icedLatte.png';
import icedA from '../images/icedA.png';
import coldB from '../images/coldB.png'; 
import White from '../images/White.png';

import './Menu.css';

const MenuPage = ({ addToCart, cartCount }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDescription, setSelectedDescription] = useState("");

  const menuData = [
    { id: 1, name: "Espresso", category: "Coffee", price: 99.00, image: espresso, description: "Espresso is a rich and strong coffee drink..." },
    { id: 2, name: "Americano", category: "Coffee", price: 99.00, image: americano, description: "Americano is made by mixing espresso with hot water..." },
    { id: 3, name: "Latte", category: "Coffee", price: 110.00, image: latte, description: "Latte is a creamy coffee drink made with espresso and steamed milk." },
    { id: 4, name: "Cappuccino", category: "Coffee", price: 110.00, image: cappuccino, description: "Cappuccino is a classic coffee beverage made with espresso, steamed milk, and thick milk foam." },
    { id: 5, name: "Caramel Macchiato", category: "Coffee", price: 140.00, image: caramel, description: "Caramel Macchiato is a sweet and creamy espresso drink flavored with vanilla syrup." },
    { id: 6, name: "Mocha", category: "Coffee", price: 130.00, image: mocha, description: "Mocha combines espresso, steamed milk, and chocolate." },
    { id: 7, name: "Vanilla Latte", category: "Coffee", price: 120.00, image: vanilla, description: "Vanilla Latte is a creamy espresso drink mixed with sweet vanilla syrup." },
    { id: 8, name: "Hazelnut Latte", category: "Coffee", price: 130.00, image: hazelnut, description: "Hazelnut Latte is a creamy coffee drink flavored with rich hazelnut syrup." },
    { id: 9, name: "Spanish Latte", category: "Coffee", price: 140.00, image: spanish, description: "Spanish Latte is a creamy and sweet coffee drink made with condensed milk." },
    { id: 10, name: "Flat White", category: "Coffee", price: 110.00, image: flat, description: "Flat White is a smooth espresso-based drink with a velvety texture." },
    { id: 11, name: "Iced Latte", category: "Coffee", price: 100.00, image: icedLatte, description: "Refreshing cold coffee drink made with espresso, milk, and ice." },
    { id: 12, name: "Iced Americano", category: "Coffee", price: 110.00, image: icedA, description: "Chilled coffee drink made with espresso, water, and ice." },
    { id: 13, name: "Cold Brew", category: "Coffee", price: 140.00, image: coldB, description: "Smooth coffee made by steeping grounds in cold water for many hours." },
    { id: 14, name: "White Mocha", category: "Coffee", price: 150.00, image: White, description: "Creamy espresso drink mixed with white chocolate sauce." },
    { id: 15, name: "Chocolate Drink", category: "Non-Coffee", price: 70, image: chocoDrink, description: "Rich and creamy beverage made with smooth chocolate and milk." },
    { id: 16, name: "Matcha Latte", category: "Non-Coffee", price: 85, image: matchaLatte, description: "Creamy drink made from premium Japanese green tea powder." },
    { id: 17, name: "Strawberry Milk", category: "Non-Coffee", price: 80, image: Strawberry, description: "Sweet and creamy milk drink blended with strawberry flavor." },
    { id: 18, name: "Iced Tea (Lemon)", category: "Non-Coffee", price: 60, image: icedTea, description: "Refreshing cold drink with a balanced tea flavor and citrus taste." },
    { id: 19, name: "Chai Latte", category: "Non-Coffee", price: 75, image: chaiLatte, description: "Warm spiced tea drink mixed with milk." },
    { id: 20, name: "Hot Milk", category: "Non-Coffee", price: 60, image: hotMilk, description: "Simple and comforting warm milk drink." },
    { id: 21, name: "Cookies & Cream Drink", category: "Non-Coffee", price: 85, image: CookiesCream, description: "Creamy sweet beverage blended with cookie flavor." },
    { id: 22, name: "Dark Chocolate", category: "Non-Coffee", price: 75, image: darkChoco, description: "Rich cocoa beverage with deep chocolate flavor." },
    { id: 23, name: "Vanilla Milk", category: "Non-Coffee", price: 70, image: vanillaM, description: "Creamy milk drink flavored with sweet vanilla syrup." },
    { id: 24, name: "Coffee Frappe", category: "Frappe", price: 95, image: CoffeeF, description: "Blended iced coffee drink with creamy texture." },
    { id: 25, name: "Caramel Frappe", category: "Frappe", price: 105, image: caramelF, description: "Creamy blended coffee drink topped with rich caramel flavor." },
    { id: 26, name: "Mocha Frappe", category: "Frappe", price: 105, image: mochaF, description: "Cold blended drink made with coffee, chocolate, and milk." },
    { id: 27, name: "Matcha Frappe", category: "Frappe", price: 115, image: matchaF, description: "Blended iced matcha drink with creamy milk." },
    { id: 28, name: "Cookies & Cream Frappe", category: "Frappe", price: 115, image: ccF, description: "Creamy blended drink mixed with cookie pieces." },
    { id: 29, name: "Fruit Tea", category: "Refreshers", price: 65, image: fruit, description: "Refreshing cold drink mixed with tea and fruity flavors." },
    { id: 30, name: "Lemonade", category: "Refreshers", price: 60, image: lemonade, description: "Refreshing citrus drink made with lemon juice." },
    { id: 31, name: "Iced Tea", category: "Refreshers", price: 60, image: icedT, description: "Cold and refreshing tea beverage served with ice." },
    { id: 32, name: "Strawberry Drink", category: "Refreshers", price: 75, image: straw, description: "Fruity refreshment with sweet strawberry flavor." },
    { id: 33, name: "Mango Drink", category: "Refreshers", price: 75, image: mango, description: "Tropical cold beverage with sweet mango flavor." },
    { id: 34, name: "Passion Fruit", category: "Refreshers", price: 75, image: passion, description: "Refreshing tropical beverage with sweet and tangy flavor." },
    { id: 35, name: "Lychee", category: "Refreshers", price: 75, image: lychee, description: "Sweet and refreshing beverage with juicy lychee flavor." },
    { id: 36, name: "Green Apple", category: "Refreshers", price: 75, image: green, description: "Refreshing fruity beverage with crisp green apple flavor." },
    { id: 37, name: "Cookies", category: "Pastries", price: 60, image: cookies, description: "Sweet baked treats with soft centers." },
    { id: 38, name: "Brownies", category: "Pastries", price: 60, image: brownies, description: "Rich chocolate desserts with chewy texture." },
    { id: 39, name: "Waffle", category: "Pastries", price: 80, image: waffle, description: "Soft and crispy pastries topped with ice cream." },
    { id: 40, name: "Croissant", category: "Pastries", price: 95, image: croissant, description: "Buttery and flaky French pastry." },
    { id: 41, name: "Donuts", category: "Pastries", price: 60, image: donuts, description: "Soft and sweet fried pastries." },
    { id: 42, name: "Cinnamon Roll", category: "Pastries", price: 85, image: cinnamon, description: "Soft pastry rolled with cinnamon filling." },
    { id: 43, name: "Muffins", category: "Pastries", price: 75, image: muffins, description: "Soft baked pastries with light texture." },
    { id: 44, name: "Macaroons", category: "Pastries", price: 70, image: macaroons, description: "Small sweet coconut desserts." },
    { id: 45, name: "Carbonara", category: "Pasta", price: 120, image: carbonara, description: "Creamy pasta dish mixed with bacon and cheese." },
    { id: 46, name: "Pesto", category: "Pasta", price: 110, image: pesto, description: "Pasta made with basil pesto and olive oil." },
    { id: 47, name: "Alfredo", category: "Pasta", price: 120, image: alfredo, description: "Creamy pasta dish made with rich white sauce." },
    { id: 48, name: "Bulgogi", category: "Pasta", price: 135, image: bulgogi, description: "Fusion dish with Korean-style bulgogi beef." },
    { id: 49, name: "Aglio e Olio", category: "Pasta", price: 110, image: aglio, description: "Simple pasta dish with garlic and olive oil." },
    { id: 50, name: "Tuna Melt", category: "Sandwiches", price: 95, image: tunaMelt, description: "Warm toasted sandwich with tuna and melted cheese." },
    { id: 51, name: "Grilled Cheese", category: "Sandwiches", price: 85, image: grilledCheese, description: "Classic toasted sandwich with melted cheese." },
    { id: 52, name: "Ham & Cheese", category: "Sandwiches", price: 95, image: hamCheese, description: "Savory sandwich filled with ham and cheese." },
    { id: 53, name: "BBQ Chicken", category: "Sandwiches", price: 110, image: bbq, description: "Toasted bread filled with BBQ chicken." },
    { id: 54, name: "Egg Salad", category: "Sandwiches", price: 90, image: eggSalad, description: "Creamy egg filling on soft bread." },
    { id: 55, name: "Smoked Salmon", category: "Sandwiches", price: 130, image: smokedSalmon, description: "Premium sandwich with smoked salmon." }
  ];

  const categories = ["All", "Coffee", "Non-Coffee", "Frappe", "Refreshers", "Pastries", "Pasta", "Sandwiches"];

  const filteredItems = menuData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="cafe-container">

      <div className="menu-interface">
        <div className="top-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search our delicious menu..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

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
          {filteredItems.map(item => (
            <div key={item.id} className="item-card">
              <div className="image-frame">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-details">
                <h3>{item.name}</h3>
                <button
                  className="about-btn"
                  onClick={() => setSelectedDescription(`${item.name}: ${item.description}`)}
                >
                  About This Food
                </button>
                <p className="item-price">₱{item.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedDescription && (
          <div className="description-box">
            <h2>Food Description</h2>
            <p>{selectedDescription}</p>
            <button className="close-btn" onClick={() => setSelectedDescription("")}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;