import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', age: '', nationality: '', position: '', program: '', message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(`[Apply] ${e.target.name} = ${e.target.value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('[Apply] Submitting application:', formData);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Simulate 5% random error for logging demo
      if (Math.random() < 0.05) throw new Error('Simulated network failure');
      alert('Application submitted successfully! We will contact you soon.');
      console.log('[Apply] Submission success');
      setFormData({ name: '', email: '', phone: '', age: '', nationality: '', position: '', program: '', message: '' });
    } catch (error) {
      console.error('[Apply] Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="apply-page">
      <div className="page-hero">
        <h1>APPLY NOW</h1>
        <p>Start your journey with NewVision Football Academy</p>
      </div>
      <div className="apply-content">
        <div className="container">
          <div className="apply-intro">
            <p>Fill out the form below to begin your application. Our admissions team will review your information and contact you about the next steps.</p>
          </div>
          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <div className="form-group"><input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required /></div>
              <div className="form-group"><input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required /></div>
              <div className="form-group"><input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><input type="text" name="position" placeholder="Playing Position" value={formData.position} onChange={handleChange} /></div>
              <div className="form-group">
                <select name="program" value={formData.program} onChange={handleChange} required>
                  <option value="">Select Program</option>
                  <option value="u7">U7 Full‑Time Program</option>
                  <option value="u9">U9 Full‑Time Program</option>
                  <option value="u11">U11 Youth Cup</option>
                  <option value="u13">U13 Full‑Time Program</option>
                  <option value="u15">U15 Full‑Time Program</option>
                  <option value="id">ID Program</option>
                  <option value="camps">Soccer Camps</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Tell us about your football experience" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;