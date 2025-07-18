import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/landing.jpg';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '1px 1px 4px black',
      }}
    >
      <h1>Welcome to Paradise Nursery</h1>
      <p>Explore our beautiful collection of houseplants to bring your home to life.</p>
      <Link to="/products">
        <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
