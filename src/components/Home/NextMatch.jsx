import React, { useState, useEffect } from 'react';
import './NextMatch.css';

const NextMatch = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(19, 30, 0, 0);

    const update = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % 86400000) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % 3600000) / (1000 * 60));
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="next-match">
      <div className="next-match-inner">
        <p className="next-match-subtitle">Countdown to Kick-Off</p>
        <h2>Next Match</h2>

        <div className="countdown">
          <div><span>{pad(timeLeft.days)}</span><small>Days</small></div>
          <div><span>{pad(timeLeft.hours)}</span><small>Hrs</small></div>
          <div><span>{pad(timeLeft.minutes)}</span><small>Min</small></div>
          <div><span>{pad(timeLeft.seconds)}</span><small>Sec</small></div>
        </div>

        <div className="match-info">
          <p>Upcoming Match</p>
          <p>NewVision Academy — Matchday coming soon</p>
          <a href="#" className="matchplan-link">View Matchplan →</a>
        </div>
      </div>
    </section>
  );
};

export default NextMatch;