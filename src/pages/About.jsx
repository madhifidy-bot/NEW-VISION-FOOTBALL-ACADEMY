import React from 'react';
import './About.css';

const About = () => {
  console.log('[Page] About rendered');
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>THE NEWVISION PROJECT</h1>
        <p>Excellence on and off the pitch</p>
      </div>
      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Philosophy</h2>
            <p>The 8-months programme, running from September to May, brings together everything young talents need to combine high‑performance sport and school. We offer a complete package that covers accommodation, catering, language lessons, and medical care.</p>
          </div>
          <div className="about-section">
            <h2>New Vision Football Pathway</h2>
            <p>The NewVision kids Cup serves as a fundamental first meeting point with high‑level football. As one of the most traditional international youth tournaments of a European club, it offers U16 players the opportunity to demonstrate their talent on a global stage.</p>
          </div>
          <div className="about-section">
            <h2>Home of legends</h2>
            <p>Since 2023, we've been developing the next generation of football talent through our unique blend of elite training and academic support, attracting players from over 25 countries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;