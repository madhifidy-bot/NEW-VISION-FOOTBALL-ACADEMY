import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPreview.css';

const programs = [
  {
    id: 'u7-u9',
    title: 'U7 - U9 FULL-TIME',
    description: 'A season-long, full-time programme for elite young players combining daily training with education.',
    icon: '⚽',
    link: '/programs#u7'
  },
  {
    id: 'u11-u15',
    title: 'U11 - U15 YOUTH CUP',
    description: 'One of the most traditional international youth tournaments for rising talent.',
    icon: '🏆',
    link: '/programs#u11'
  },
  {
    id: 'id',
    title: 'ID PROGRAM',
    description: 'Scouting programme with world finals — a pathway for talented players to be discovered.',
    icon: '🔍',
    link: '/programs#id'
  },
  {
    id: 'camps',
    title: 'SOCCER CAMPS',
    description: 'Beyond football skills, our camps focus on teamwork, leadership, discipline, and sportsmanship.',
    icon: '⛺',
    link: '/programs#camps'
  }
];

const ProgramsPreview = () => {
  console.log('[ProgramsPreview] rendered with', programs.length, 'programs');
  return (
    <section className="programs-preview">
      <span className="section-eyebrow">What We Offer</span>
      <h2 className="section-title">Our Academy Programs</h2>

      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <Link to={program.link} className="program-link">Learn more</Link>
          </div>
        ))}
      </div>

      <div className="programs-footer">
        <Link to="/programs" className="view-all-btn">View All Programs →</Link>
      </div>
    </section>
  );
};

export default ProgramsPreview;