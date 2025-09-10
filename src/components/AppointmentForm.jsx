import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ treatment, onSuccess }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Placeholder: replace with your real API endpoint or mail server integration
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, treatment }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setLoading(false);
      setForm({ name: '', phone: '', email: '', date: '', time: '', notes: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      setLoading(false);
      setError('Unable to submit — please try again.');
    }
  }

  return (
    <form className="appointment-form" onSubmit={submit}>
      <h3>Book: {treatment}</h3>
      {error && <div className="form-error">{error}</div>}
      <label>Name
        <input required value={form.name} onChange={update('name')} />
      </label>
      <label>Phone
        <input required value={form.phone} onChange={update('phone')} />
      </label>
      <label>Email
        <input type="email" required value={form.email} onChange={update('email')} />
      </label>
      <label>Date
        <input type="date" required value={form.date} onChange={update('date')} />
      </label>
      <label>Time
        <input type="time" required value={form.time} onChange={update('time')} />
      </label>
      <label>Notes
        <textarea value={form.notes} onChange={update('notes')} />
      </label>
      <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send booking'}</button>
    </form>
  );
};

export default AppointmentForm;
