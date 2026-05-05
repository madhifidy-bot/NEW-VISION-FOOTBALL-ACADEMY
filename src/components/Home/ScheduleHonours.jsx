import React from 'react';
import './ScheduleHonours.css';

const schedule = [
  { day: "WED 5:00–6:00 PM", event: "Goalkeeper training", type: "All ages - (Mini Pitch)" },
  { day: "THU 4:00–5:30 PM", event: "Skills competition (dribbling race, shooting)", type: "U7–U12 - (Garden Estate)" },
  { day: "THU 5:30–6:30 PM", event: "Team bonding & life skills", type: "All ages - (Classroom)" },
  { day: "WED 4:00–5:00 PM", event: "Physical conditioning (agility, speed)", type: "U9–U15 -(Garden Estate)" }
];

const honours = [
  { name: "Nairobi International cup", count: 14 },
  { name: "Talanta Cup", count: 20 },
  { name: "Rausha-Kipaji Cup", count: 6 },
  { name: "FKF Youth Leagues", count: 12 },
  { name: "League Cup", count: 5 },
  { name: "Mysa League", count: 1 }
];

const ScheduleHonours = () => {
  return (
    <div className="schedule-honours">
      <div className="schedule">
        <h3>📅 SCHEDULE</h3>
        {schedule.map((item, idx) => (
          <div key={idx} className="schedule-item">
            <span className="date">{item.date}</span>
            <span className="event">{item.event}</span>
            <span className="type">{item.type}</span>
          </div>
        ))}
      </div>
      <div className="honours">
        <h3>🏆 HONOURS</h3>
        <ul>
          {honours.map((h, idx) => (
            <li key={idx}>
              <span>{h.name}</span>
              <span className="count">{h.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleHonours;