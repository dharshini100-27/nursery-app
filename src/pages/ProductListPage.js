import React, { useContext } from 'react';
import { plants } from '../data/plants';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';

const ProductListPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: 'center' }}>Available Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '200px' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
