import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import AppointmentForm from '../components/AppointmentForm';
import './Home.css';

const featuredServices = [
  { key: 'hydro', name: 'Hydrofacial', image: '/src/assets/hydrofacial.jpg' },
  { key: 'micro', name: 'Microneedling', image: '/src/assets/microneedling.jpg' },
  { key: 'carbon', name: 'Carbon Laser', image: '/src/assets/carbon laser.jpg' },
];

const featuredProducts = [
  { name: 'Cleanser', image: '/src/assets/cleanser1.jpg' },
  { name: 'Serum', image: '/src/assets/serum1.jpg' },
  { name: 'Essence', image: '/src/assets/essence1.jpg' },
  { name: 'Sunscreen', image: '/src/assets/sunscreen1.jpg' },
];

function FeaturedServices({ onBook }) {
  return (
    <section className="featured-section services" aria-label="Featured services">
      <h2>Featured Treatments</h2>
      <div className="services-scroll">
        {featuredServices.map(s => (
          <div className="service-card" key={s.key}>
            <img src={s.image} alt={s.name} className="service-thumb" />
            <div className="service-info">
              <div className="service-title">{s.name}</div>
              <button className="btn-secondary" onClick={() => onBook(s.name)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="featured-section products" aria-label="Featured products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {featuredProducts.map(p => (
          <ProductCard key={p.name} name={p.name} image={p.image} />
        ))}
      </div>
      <div className="view-more"><a href="/products">View More</a></div>
    </section>
  );
}

function AboutShort() {
  return (
    <section className="featured-section about-short" aria-label="About SutalyGlamTreat">
      <h2>About SutalyGlamTreat</h2>
      <p className="about-text">
        SutalyGlamTreat is a boutique beauty and skincare studio focused on safe, modern treatments and professional product recommendations. 
        We help your skin look and feel its best.
      </p>
    </section>
  );
}

function QuickContact() {
  return (
    <section className="featured-section contact-quick" aria-label="Contact">
      <h2>Contact</h2>
      <div className="contact-quick-grid">
        <div className="contact-block">
          <p><strong>Email:</strong> <a href="mailto:awatifsaid4444@gmail.com">awatifsaid4444@gmail.com</a></p>
          <p><strong>Call:</strong> <a href="tel:+255772594976">+255 772 594 976</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/255628614548" target="_blank" rel="noopener noreferrer">+255 628 614 548</a></p>
          <div className="socials">
            <a href="https://instagram.com/sutalyglamtreat" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/255628614548" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="contact-map-small">
          <iframe
            title="Sutaly location"
            src="https://www.google.com/maps?q=Kisonge+Thabit+Kombo+Building,+Zanzibar&output=embed"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  function openBooking(name) {
    setSelected(name);
    setOpen(true);
  }

  return (
    <main className="home-page">
      <HeroBanner />

      <FeaturedServices onBook={openBooking} />

      <Products />

      <AboutShort />

      <QuickContact />

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AppointmentForm treatment={selected} onSuccess={() => setOpen(false)} />
        </Modal>
      )}
    </main>
  );
}
