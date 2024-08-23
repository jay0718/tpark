import React from 'react';
import './EventCalendar.css'; // Ensure you create this CSS file for styling

const eventCalendarData = [
  {
    status: "OPEN",
    dateRange: "07.31(오전 11시) ~ 08.30(오전 11시)",
    title: "빙엑스 대회",
  },
  {
    status: "OPEN",
    dateRange: "07.31(오후 12시) ~ 08.30(오후 12시)",
    title: "비트겟 대회",
  },
  {
    status: "OPEN",
    dateRange: "08.08(오전 8시) ~ 09.08(오전 8시)",
    title: "게이트아이오 대회",
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
