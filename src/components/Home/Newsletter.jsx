import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('[Newsletter] Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <h3>📧 NEWSLETTER</h3>
      <p>Sign up for the NewVision Global Academy newsletter – exclusive news, camp updates, and more.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-Mail Address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="consent">
          <label>
            <input type="checkbox" required /> I consent to receive personalised emails.
          </label>
        </div>
        <button type="submit">SUBSCRIBE NOW →</button>
      </form>
      {subscribed && <p className="success">Thank you! Check your inbox.</p>}
    </section>
  );
};

export default Newsletter;