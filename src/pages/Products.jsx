import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

// Group products by the categories you specified and use the available assets
const categories = {
  Cleanser: [
  { name: 'Cleanser', image: '/src/assets/cleanser1.jpg' },
  { name: 'Cleanser', image: '/src/assets/cleanser2.jpg' },
  { name: 'Cleanser', image: '/src/assets/cleanser3.jpg' },
  { name: 'Cleanser', image: '/src/assets/cleanser4.jpg' },
  ],
  Toner: [
  { name: 'Toner', image: '/src/assets/toner1.jpg' },
  { name: 'Toner', image: '/src/assets/toner2.jpg' },
  { name: 'Toner', image: '/src/assets/toner3.jpg' },
  { name: 'Toner', image: '/src/assets/toner4.jpg' },
  { name: 'Toner', image: '/src/assets/toner5.jpg' },
  ],
  Face_Cream: [
  { name: 'Face_Cream', image: '/src/assets/facecream1.jpg' },
  { name: 'Face_Cream', image: '/src/assets/facecream2.jpg' },
  { name: 'Face_Cream', image: '/src/assets/facecream3.jpg' },
  { name: 'Face_Cream', image: '/src/assets/facecream4.jpg' },
  ],
  Sunscreen: [
  { name: 'Sunscreen ', image: '/src/assets/sunscreen1.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen2.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen3.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen4.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen5.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen6.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen7.jpg' },
  { name: 'Sunscreen ', image: '/src/assets/sunscreen8.jpg' },
  ],
  Serum: [
  { name: 'Serum', image: '/src/assets/serum1.jpg' },
  { name: 'Serum ', image: '/src/assets/serum2.jpg' },
  { name: 'Serum ', image: '/src/assets/serum3.jpg' },
  { name: 'Serum', image: '/src/assets/serum4.jpg' },
  { name: 'Serum ', image: '/src/assets/serum5.jpg' },
  { name: 'Serum ', image: '/src/assets/serum6.jpg' },
  { name: 'Serum ', image: '/src/assets/serum7.jpg' },
  ],
  'Eye Cream': [
  { name: 'Eye Cream', image: '/src/assets/eyecream1.jpg' },
  { name: 'Eye Cream ', image: '/src/assets/eyecream2.jpg' },
  { name: 'Eye Cream ', image: '/src/assets/eyecream3.jpg' },
  { name: 'Eye Cream', image: '/src/assets/eyecream4.jpg' },
  { name: 'Eye Cream ', image: '/src/assets/eyecream5.jpg' },
  { name: 'Eye Cream ', image: '/src/assets/eyecream6.jpg' },
  ],
  'Essence': [
  { name: 'Essence', image: '/src/assets/essence1.jpg' },
  { name: 'Essence ', image: '/src/assets/essence2.jpg' },
  { name: 'Essence ', image: '/src/assets/essence3.jpg' },
  { name: 'Essence', image: '/src/assets/essence4.jpg' },
  ],
  'Lip Care': [
  { name: 'Lip Essence', image: '/src/assets/lip essence.webp' },
  { name: 'Lip Balm', image: '/src/assets/lip balm.avif' },
  { name: 'Lip Gloss', image: '/src/assets/lip gloss.webp' },
  ],
};

const Products = () => (
  <div className="products-page">
    <h1>Our Products</h1>
    {Object.entries(categories).map(([categoryName, items]) => (
      <section className="category-section" key={categoryName}>
        <h2 className="category-title">{categoryName}</h2>
        <div className="products-grid">
          {items.map((p) => <ProductCard key={p.name} {...p} category={categoryName} />)}
        </div>
      </section>
    ))}
  </div>
);

export default Products;
