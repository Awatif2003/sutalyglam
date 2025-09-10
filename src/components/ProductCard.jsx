import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image }) => (
  <div className="product-card" aria-label={name} title={name}>
    <img src={image} alt={name} className="product-image" />
  </div>
);

export default ProductCard;
