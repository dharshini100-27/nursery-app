import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>We bring nature into your home with the best collection of houseplants.</p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
