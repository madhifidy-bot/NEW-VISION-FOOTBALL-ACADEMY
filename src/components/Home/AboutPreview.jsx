import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
  console.log('[AboutPreview] loaded');
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <span className="eyebrow">The Project</span>
          <h2>Built On Passion, Driven By Purpose</h2>
          <p>
            Our programme brings together everything young talents need to combine
            high-performance sport and school. We offer a complete package that covers
            accommodation, catering, language lessons and medical care.
          </p>
          <p>
            Since 2020, New Vision has been part of the international youth football
            landscape — providing a unique opportunity for talented players from around
            the world to train at our world-class facilities and be seen on the global stage.
          </p>
          <Link to="/about" className="about-link">Read Full Project →</Link>
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
            <span className="stat-number">25+</span>
            <span className="stat-label">Nationalities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Development Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;