import React, { useState } from 'react';
import './Booking.css';

const services = [
  'Waxing',
  'Facial',
  'Skincare Consultation',
];

const Booking = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for booking with Sutaly Glam Treat!');
    setForm({ name: '', phone: '', service: '', date: '', time: '' });
  };

  return (
    <div className="booking-page">
      <h1>Book an Appointment</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
