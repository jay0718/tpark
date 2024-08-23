import React from 'react';

const eventsData = [
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "빙엑스 8월 개인대회 (8.1~8.31)",
    mainText: "4만 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 30등까지 차등 지급",
    entryFee: "참가금액: 200달러↑",
    volume: "거래량: 2만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
  {
    imgSrc: "https://jay0718.github.io/tpark/bingx_competition.jpg",
    title: "바이비트 8월 개인대회 (8.1~8.31)",
    mainText: "5천 달러 개인 대회",
    description: "PNL, ROI 1등 ~ 10등까지 차등 지급",
    entryFee: "참가금액: 300달러↑",
    volume: "거래량: 10만 달러↑",
    link: "https://www.bitget.com/asia/events/competition/b1133b008fab54bc954e6b1c5182ba36",
  },
];

function Events() {
  return (
    <div className="events-outer-container">
      <div className="events-title">
        <div className="events-title-description font-weight-medium">Tpark과 제휴 거래소와 함께하는</div>
        <div className="events-title-text font-weight-bold">이벤트 참여하고 상금 받아가세요!</div>
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
