import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  console.log('[Hero] Component mounted');
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>NEWVISION FOOTBALL ACADEMY</h1>
        <p className="hero-subtitle">Elite Football Training • Kids Exposure • Academic Excellence</p>
        <p className="hero-description">
          A 4 -months programme bringing together everything young talents need to combine high‑performance sport and school.
          Complete package covering accommodation, catering, language lessons, and medical care.
        </p>
        <div className="hero-buttons">
          <Link to="/apply" className="btn-primary">APPLY NOW →</Link>
          <Link to="/about" className="btn-secondary">DISCOVER THE PROJECT</Link>
        </div>
      </div>
      <div className="hero-scroll">▼ SCROLL</div>
    </section>
  );
};

export default Hero;