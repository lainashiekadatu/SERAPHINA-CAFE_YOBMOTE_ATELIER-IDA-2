import "./App.css";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Espresso", price: 130, qty: 1 },
    { id: 2, name: "Americano", price: 125.5, qty: 1 },
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = 50;
  const total = subtotal + delivery;

  return (
    <div className="app-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Café Yobmôte Atelier</div>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
          <a href="#">ORDER ONLINE</a>
          <a href="#">CART ({cart.length})</a>
          <a href="#">ACCOUNT</a>
        </div>
      </nav>

      {/* MAIN */}
      <div className="checkout-container">

        {/* LEFT */}
        <div className="cart-section">
          <h2>Checkout</h2>

          {cart.map(item => (
            <div key={item.id} className="cart-item">

              <div className="item-info">
                <div>
                  <h3>{item.name}</h3>
                  <p className="price">₱{item.price.toFixed(2)}</p>
                </div>

                <div className="item-actions">
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button 
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="summary-section">
          <h3>Your Cart</h3>

          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x{item.qty}</span>
              <span onClick={() => removeItem(item.id)}>✕</span>
            </div>
          ))}

          <div className="summary-totals">
            <div><span>Subtotal</span><span>₱{subtotal.toFixed(2)}</span></div>
            <div><span>Delivery</span><span>₱{delivery.toFixed(2)}</span></div>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₱{total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>

      </div>
    </div>
  );
};

export default App;