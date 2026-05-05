import React from 'react';
import { Link } from 'react-router-dom';
// No icon imports – use simple text or emojis for social media links to reduce bundle size
import './Footer.css';

const Footer = () => {
  console.log('[Footer] rendered');
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>NEWVISION FOOTBALL ACADEMY</h3>
          <p>Developing the next generation of football talent through elite training and education.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">The Project</Link></li>
            <li><Link to="/programs">Academy Programs</Link></li>
            <li><Link to="/apply">Apply Now</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 GARDEN ESTATE, NAIROBI</p>
          <p>📞 +254 728799968</p>
          <p>✉️ info@newvision-global.com</p>
          <div className="social-icons">
            <div className="social-icons">
  <a href="#">📷 IG</a>
  <a href="#">🐦 TW</a>
  <a href="#">📺 YT</a>
  <a href="#">📘 FB</a>
</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NewVision Football Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;