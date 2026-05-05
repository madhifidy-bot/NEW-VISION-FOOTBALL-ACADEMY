import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    console.log('[Contact] Sending:', formData);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      alert('Message sent! We will reply within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
      console.log('[Contact] Send success');
    } catch (error) {
      console.error('[Contact] Send error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>CONTACT US</h1>
        <p>Get in touch with our team</p>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>NewVision Football Academy</h3>
              <p>📍 NEW VISION FOOTBALL ACADEMY</p>
              <p>HOME OF YOUTH FOOTBALL EXCELLENCE</p>
              <p>GARDEN ESTATE</p>
              <br />
              <p>📞 254 728799968</p>
              <p>✉️ info@newvision-global.com</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;