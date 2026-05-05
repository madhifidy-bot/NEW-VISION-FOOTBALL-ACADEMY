import React from 'react';
import './Partners.css';

const partners = ["NewVision", "zebstrong", "mysa", "Nai-cup", "talanta-cup",  "rausha-kipaji", "soccer-elite",   "talent-scouts", "youth-football", ];

const Partners = () => {
  return (
    <section className="partners">
      <h3>OUR PARTNERS</h3>
      <div className="partner-logos">
        {partners.map((p, idx) => (
          <div key={idx} className="partner">{p}</div>
        ))}
      </div>
    </section>
  );
};
  
export default Partners;