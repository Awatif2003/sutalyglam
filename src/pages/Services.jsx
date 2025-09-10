import React from 'react';
import Modal from '../components/Modal';
import AppointmentForm from '../components/AppointmentForm';
import enzymeImg from '../assets/enzyme.jpg';
import chemicalImg from '../assets/chemical peel.jpg';
import hydroImg from '../assets/hydrofacial.jpg';
import carbonImg from '../assets/carbon laser.jpg';
import microImg from '../assets/microneedling.jpg';
import './Services.css';

const services = [
  { key: 'enzyme', name: 'Enzyme', img: enzymeImg },
  { key: 'chemical', name: 'Chemical Peel', img: chemicalImg },
  { key: 'hydro', name: 'Hydrofacial', img: hydroImg },
  { key: 'carbon', name: 'Carbon Laser', img: carbonImg },
  { key: 'micro', name: 'Microneedling', img: microImg },
];

const Services = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  function openBooking(svc) {
    setSelected(svc);
    setOpen(true);
  }

  return (
    <main className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(s => (
          <div className="service-row" key={s.key}>
            <img src={s.img} alt={s.name} className="service-img" />
            <div className="service-name">{s.name}</div>
            <div className="service-action">
              <button className="btn-primary" onClick={() => openBooking(s.name)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AppointmentForm treatment={selected} onSuccess={() => setOpen(false)} />
        </Modal>
      )}
    </main>
  );
};

export default Services;
