import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPreview.css';

const programs = [
  { id: 'u7-u9', title: 'U7 - U9 FULL-TIME PROGRAM', description: 'A season‑long, full‑time programme for elite U19 players combining daily training with education.', icon: '⚽', link: '/programs#u7-u9' },
  { id: 'u11-u15', title: 'U11- U15 YOUTH CUP', description: 'One of the most traditional international youth tournaments for U16 players.', icon: '🏆', link: '/programs#u11-u15' },
  { id: 'id', title: 'ID PROGRAM', description: 'Scouting programme with world finals in Munich – a pathway for talented players to be discovered.', icon: '🔍', link: '/programs#id' },
  { id: 'camps', title: 'SOCCER CAMPS', description: 'Beyond football skills, our camps focus on teamwork, leadership, discipline, and sportsmanship.', icon: '⛺', link: '/programs#camps' }
];

const ProgramsPreview = () => {
  console.log('[ProgramsPreview] rendered with', programs.length, 'programs');
  return (
    <section className="programs-preview">
      <h2 className="section-title">OUR ACADEMY PROGRAMS</h2>
      <div className="programs-grid">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <Link to={program.link} className="program-link">LEARN MORE →</Link>
          </div>
        ))}
      </div>
      <div className="programs-footer">
        <Link to="/programs" className="view-all-btn">VIEW ALL PROGRAMS</Link>
      </div>
    </section>
  );
};

export default ProgramsPreview;