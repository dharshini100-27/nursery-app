import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './ProductListingPage.css';

const ProductListingPage = () => {
  return (
    <div className="product-listing">
      <h2>Our Houseplants</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
