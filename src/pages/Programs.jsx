import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Programs.css';

const ProgramDetail = ({ id, title, duration, ageGroup, location: loc, description }) => (
  <div id={id} className="program-detail">
    <h3>{title}</h3>
    <div className="program-meta">
      <span>📅 {duration}</span>
      <span>👥 {ageGroup}</span>
      <span>📍 {loc}</span>
    </div>
    <p>{description}</p>
  </div>
);

const Programs = () => {
  const location = useLocation();
  const [showGallery, setShowGallery] = useState(false);

  // Gallery images – add as many as you like (replace with your own URLs)
  const galleryImages = [
    'https://picsum.photos/id/100/400/300',
    'https://picsum.photos/id/128/400/300',
    'https://picsum.photos/id/20/400/300',
    'https://picsum.photos/id/27/400/300',
    'https://picsum.photos/id/30/400/300',
    'https://picsum.photos/id/40/400/300',
    'https://picsum.photos/id/42/400/300',
    'https://picsum.photos/id/44/400/300',
    'https://picsum.photos/id/66/400/300',
    'https://picsum.photos/id/77/400/300',
    'https://picsum.photos/id/88/400/300',
    'https://picsum.photos/id/96/400/300',
    'https://picsum.photos/id/15/400/300',
    'https://picsum.photos/id/26/400/300',
    'https://picsum.photos/id/49/400/300'
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        console.log(`[Programs] Scrolling to ${location.hash}`);
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`[Programs] Element ${location.hash} not found`);
      }
    }
  }, [location]);

  console.log('[Page] Programs rendered');

  return (
    <div className="programs-page">
      <div className="page-hero">
        <h1>ACADEMY PROGRAMS</h1>
        <p>Choose your path to excellence</p>
      </div>
      <div className="programs-content">
        <div className="container">
          {/* EXISTING PROGRAM CARDS – unchanged */}
          <ProgramDetail
            id="u7"
            title="U7 FULL-TIME PROGRAM"
            duration="September - May (8 months)"
            ageGroup="Ages 7-9"
            location="GARDEN ESTATE, NAIROBI"
            description="This elite, season‑long program is designed for BUILDING  players aiming to reach the next level. Daily professional training based on the NewVision philosophy, led by CAFD‑licensed coaches. Includes  meals, language lessons, medical care, and academic support."
          />
          <ProgramDetail
            id="u11"
            title="SENIOR YOUTH CUP"
            duration="Annual Tournament"
            ageGroup="Ages 11-15"
            location="NAIROBI  + Finals in VARIOUS LOCATIONS"
            description="One of the most traditional  youth tournaments. Winners advance to the world finals in kenya. A unique opportunity to be scouted by professional clubs."
          />
          <ProgramDetail
            id="id"
            title="ID PROGRAM"
            duration="Scouting Events"
            ageGroup="Ages 7-15"
            location="COUNTRYWIDE - KENYA"
            description="Our ID Program identifies promising talent through scouting events held across multiple countries. Selected players receive invitations to training camps and potential placement in our full‑time programs."
          />
          <ProgramDetail
            id="camps"
            title="SUMMER & HOLIDAY CAMPS"
            duration="1-4 weeks"
            ageGroup="Ages 7-15"
            location="Multiple Locations"
            description="Beyond football skills, our camps include components that focus on teamwork, leadership, discipline, and sportsmanship. Open to players of all skill levels who want to experience our training methodology."
          />

          {/* NEW GALLERY CARD – exactly your line, no changes */}
          <div onClick={() => setShowGallery(!showGallery)} style={{ cursor: 'pointer' }}>
            <ProgramDetail
              id="gallery"
              title="GALLERY"
              duration=""
              ageGroup=""
              location=""
              description="Explore our gallery to see the vibrant life at NewVision Football Academy. From intense training sessions to unforgettable moments on the pitch, our gallery captures the spirit and passion of our academy community."
            />
          </div>

          {/* PHOTO GRID – appears when gallery card is clicked */}
          {showGallery && (
            <div className="gallery-grid-container">
              <h2 className="gallery-heading">📸 Our Moments</h2>
              <div className="photo-grid">
                {galleryImages.map((img, idx) => (
                  <div className="photo-card" key={idx}>
                    <img src={img} alt={`gallery-${idx + 1}`} loading="lazy" />
                    <div className="photo-caption">⚽🔥</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;