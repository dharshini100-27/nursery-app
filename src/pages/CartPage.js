import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalCost,
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="cart-buttons">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Plants: {totalItems}</p>
            <p>Total Cost: ₹{totalCost}</p>
            <button className="btn">Continue Shopping</button>
            <button className="btn checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
