import React from 'react';
import Calendar from './Calendar';

const eventsData = [
  {
    imgSrc: "https://jay0718.github.io/tpark/비트겟대회1.png",
    title: "비트겟 11-12월 개인대회",
    mainText: "6천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 20만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/f93393be4ee55d37a439832af8dadd79",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/비트겟대회1.png",
    title: "비트겟 12월 팀대회",
    mainText: "56만 달러 팀 대회",
    description: "PNL, ROI 1등 ~ 10등 팀 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 5만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/1dfb51ded7bb548fa649905159533b25",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/okx대회1.png",
    title: "OKX 개인대회",
    mainText: "62000 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 20등까지 차등 지급",
    entryFee: "참가금액: 100달러↑",
    volume: "거래량: 1만 달러↑",
    link: "https://www.okx.com/campaigns/roar-of-the-bull-2024?channelid=37815687",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/비트겟대회1.png",
    title: "비트겟 10-11월 개인대회",
    mainText: "4천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 3만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/a4c91760f62052f7a5a5fbacac6bfcd3",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/비트겟대회1.png",
    title: "비트겟 9-10월 개인대회",
    mainText: "4천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 3만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/비트겟대회1.png",
    title: "비트겟 7-8월 개인대회",
    mainText: "4천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 3만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/294759aabb9a55ff947e56bc88c7cb2d",
  },
];

function Events() {
  return (
    <div className="events-outer-container">
      <div className="events-title">
        <div className="events-title-text font-weight-bold">진행중인 이벤트 확인하기</div>
        <Calendar/>
      </div>
      <div className="events-title">
        <div className="events-title-text font-weight-bold">이벤트 모두 확인하기</div>
      </div>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="event-card-link">
            <div className="event-card">
              <img src={event.imgSrc} alt={event.title} className="event-image" />
              <div className="event-details">
                <div className="event-title font-weight-bold">{event.title}</div>
                <div className="event-mainText">{event.mainText}</div>
                <div className="event-description">{event.description}</div>
                <div className="event-entry-fee">{event.entryFee}</div>
                <div className="event-volume">{event.volume}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Events;
