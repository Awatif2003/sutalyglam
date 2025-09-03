import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const products = [
  { name: 'Glow Serum', image: '/src/assets/placeholders/product1.jpg', price: '$29' },
  { name: 'Hydra Cleanser', image: '/src/assets/placeholders/product2.jpg', price: '$19' },
  { name: 'Radiance Cream', image: '/src/assets/placeholders/product3.jpg', price: '$35' },
  { name: 'SPF 50 Sunscreen', image: '/src/assets/placeholders/product4.jpg', price: '$22' },
  { name: 'Night Repair Oil', image: '/src/assets/placeholders/product5.jpg', price: '$32' },
  { name: 'Vitamin C Mask', image: '/src/assets/placeholders/product6.jpg', price: '$27' },
];

const Products = () => (
  <div className="products-page">
    <h1>Our Products</h1>
    <div className="products-grid">
      {products.map((p, i) => <ProductCard key={i} {...p} />)}
    </div>
  </div>
);

export default Products;
