import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  console.log('[Hero] Component mounted');
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        <span className="hero-eyebrow">
          <span className="dot"></span>
          Est. 2020 • Nairobi, Kenya
        </span>

        <h1>
          Shaping The <span className="accent">Future</span><br />
          Of African Football
        </h1>

        <p className="hero-subtitle">
          Elite Training <span className="separator">•</span>
          Youth Exposure <span className="separator">•</span>
          Academic Excellence
        </p>

        <p className="hero-description">
          A four-month, high-performance programme bringing together everything young
          talents need to combine elite sport with school. A complete package covering
          accommodation, catering, language lessons, and medical care.
        </p>

        <div className="hero-buttons">
          <Link to="/apply" className="btn-primary">APPLY NOW →</Link>
          <Link to="/about" className="btn-secondary">DISCOVER THE PROJECT</Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">125+</div>
            <div className="hero-stat-label">Players</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">25+</div>
            <div className="hero-stat-label">Nationalities</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">58</div>
            <div className="hero-stat-label">Trophies</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">5★</div>
            <div className="hero-stat-label">Coaches</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">▼ SCROLL</div>
    </section>
  );
};

export default Hero;