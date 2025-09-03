import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-price">{price}</p>
  </div>
);

export default ProductCard;
