import React, { useState } from 'react';
import './GetInvolved.css';

const Involvement = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    availability: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon.`);
    setFormData({ name: '', email: '', availability: '' });
  };

  return (
    <div className="get-involved-container">
      <h1 className="get-involved-h1">Get Involved!</h1>

      <section className="info-section">
        <h2 className="support-h2">Why Support FRN?</h2>
        <p>
          FRN works to reduce food waste and fight hunger in the US by redistributing surplus
          food to those in need. Here at LMU, we are working to shape a brighter future where 
          everyone has access to nutritious foods. Your support helps us continue this mission at LMU!
        </p>
      </section>

      <section className="donate-section">
        <h2 className="support-h2"> Support Us</h2>
        <button
          className="donate-btn"
          onClick={() => window.location.href = 'https://www.foodrecoverynetwork.org/donate'}
        >
          Donate Now
        </button>
      </section>

      <section className="volunteer-section">
        <h2 className="signup-h2">Sign Up to Volunteer</h2>
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="availability"
            placeholder="Availability (e.g., weekends)"
            value={formData.availability}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default Involvement;
