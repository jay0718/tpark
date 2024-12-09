import React from 'react';
import './EventCalendar.css'; // Ensure you create this CSS file for styling

const eventCalendarData = [
  {
    status: "OPEN",
    dateRange: "11.19 ~ 12.20",
    title: "비트겟 개인 대회",
  },
  {
    status: "OPEN",
    dateRange: "11.27 ~ 12.27",
    title: "비트겟 팀 대회",
  },
  {
    status: "OPEN",
    dateRange: "12.06 ~ 12.22",
    title: "OKX 개인 대회",
  },
];

function Calendar() {
  return (
    <div className="event-calendar-container">
      {eventCalendarData.map((event, index) => (
        <div key={index} className="event-calendar-item">
          <div className="event-status">
            <span>{event.status}</span>
          </div>
          <div className="event-details">
            <div className="event-date-range">{event.dateRange}</div>
            <div className="event-title">{event.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
