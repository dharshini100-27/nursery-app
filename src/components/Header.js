import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#c1f0c1' }}>
      <h2>🌿 Paradise Nursery</h2>
      <nav>
        {location.pathname !== '/products' && <Link to="/products">Products</Link>} |{' '}
        {location.pathname !== '/cart' && <Link to="/cart">Cart 🛒 ({totalItems})</Link>}
      </nav>
    </header>
  );
};

export default Header;
