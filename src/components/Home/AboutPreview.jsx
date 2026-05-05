import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
  console.log('[AboutPreview] loaded');
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <h2>THE NEWVISION PROJECT</h2>
          <p>Our programme brings together everything young talents need to combine high‑performance sport and school. We offer a complete package that covers accommodation, catering, language lessons and medical care.</p>
          <p>Since 2020, NewVision has been part of the international youth football landscape, providing a unique opportunity for talented players from around the world to form a team and train at our world‑class facilities.</p>
          <Link to="/about" className="about-link">READ FULL PROJECT →</Link>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Months Programme</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">125+</span>
            <span className="stat-label">Skilled Players</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Focus on Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;