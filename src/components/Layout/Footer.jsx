import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  console.log('[Footer] rendered');
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h3>
            <span className="brand-accent">NEW -</span>VISION
            <span className="brand-light"> ACADEMY</span>
          </h3>
          <p>
            Developing the next generation of football talent through elite training,
            education, and character. Based in Nairobi, open to the world.
          </p>
          <div className="footer-badges">
            <span>⚽ Elite Training</span>
            <span>🎓 Academics</span>
            <span>🌍 International Exposure</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">The Project</Link></li>
            <li><Link to="/programs">Academy Programs</Link></li>
            <li><Link to="/apply">Apply Now</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><Link to="/programs#u7">U7 — U9 Full-Time</Link></li>
            <li><Link to="/programs#u11">U11 — U15 Youth Cup</Link></li>
            <li><Link to="/programs#id">ID Program</Link></li>
            <li><Link to="/programs#camps">Soccer Camps</Link></li>
            <li><Link to="/programs#gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p className="contact-line"><span>📍</span> Garden Estate, Nairobi</p>
          <p className="contact-line"><span>📞</span> +254 728 799 968</p>
          <p className="contact-line"><span>✉️</span> info@newvision-global.com</p>

          <div className="social-icons" aria-label="Social media">
            <a href="#" aria-label="Instagram" title="Instagram">📷</a>
            <a href="#" aria-label="Twitter" title="Twitter">🐦</a>
            <a href="#" aria-label="YouTube" title="YouTube">📺</a>
            <a href="#" aria-label="Facebook" title="Facebook">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} New Vision Football Academy. All rights reserved.</p>
        <p className="footer-tag">
          Designed with <span className="heart">♥</span> for the future of football.
        </p>
      </div>
    </footer>
  );
};

export default Footer;