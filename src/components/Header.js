import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1 className="logo">🌿 Paradise Nursery</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
