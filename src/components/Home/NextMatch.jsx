import React, { useState, useEffect } from 'react';
import './NextMatch.css';

const NextMatch = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // example: match in 2 days
    targetDate.setHours(19, 30, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (86400000)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (3600000)) / (1000 * 60));
      const seconds = Math.floor((diff % (60000)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="next-match">
      <h2>NEXT MATCH</h2>
      <div className="countdown">
        <div><span>{timeLeft.days}</span><small>DAYS</small></div>
        <div><span>{timeLeft.hours}</span><small>HRS</small></div>
        <div><span>{timeLeft.minutes}</span><small>MIN</small></div>
        <div><span>{timeLeft.seconds}</span><small>SEC</small></div>
      </div>
      <div className="match-info">
        <p>UPCOMING MATCH</p>
        <p>NEXT MATCH IS COMING SOON</p>
        <p>Matchplan →</p>
      </div>
    </section>
  );
};

export default NextMatch;