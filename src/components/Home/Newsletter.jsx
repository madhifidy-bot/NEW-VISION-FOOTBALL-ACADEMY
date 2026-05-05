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
      <h3>📧 Join Our Newsletter</h3>
      <p>
        Sign up for New Vision Football Academy updates — exclusive news, camp
        announcements, and behind-the-scenes stories from our rising stars.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="consent">
          <label>
            <input type="checkbox" required />
            I consent to receive personalised emails.
          </label>
        </div>
        <button type="submit">Subscribe Now →</button>
      </form>
      {subscribed && <p className="success">✅ Thank you! Check your inbox.</p>}
    </section>
  );
};

export default Newsletter;