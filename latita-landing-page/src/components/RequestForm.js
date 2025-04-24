import React from 'react';

const RequestForm = () => (
  <section className="form-section">
    <h2 className="form-title">Request Service</h2>
    <form className="service-form">
      <input type="text" placeholder="Full Name" required />
      <select>
        <option>Select Service</option>
        <option>Independent Audit</option>
        <option>Independent Review</option>
        <option>Investigations</option>
        <option>Estate Planning</option>
        <option>Trust Restructuring</option>
      </select>
      <textarea placeholder="Further Information"></textarea>
      <input type="email" placeholder="Email Address" required />
      <input type="text" placeholder="Contact Number (Optional)" />

      <label className="checkbox">
        <input type="checkbox" required /> I have read the Privacy Policy and agree to its terms.
      </label>

      <p className="body-text">Where did you hear about us?</p>
      <div className="channels">
        <label><input type="checkbox" /> Facebook</label>
        <label><input type="checkbox" /> LinkedIn</label>
        <label><input type="checkbox" /> Instagram</label>
        <label><input type="checkbox" /> Word of Mouth</label>
      </div>

      <button type="submit" className="btn send-btn">Send Request</button>
    </form>
  </section>
);

export default RequestForm;
