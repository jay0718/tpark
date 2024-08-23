import React from 'react';

function ExchangeCard({ img, name, feePayback, limitOrderFee, marketOrderFee, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="exchange-card">
      <div>
        <img src={`${img}`} alt={`${name} logo`} />
        <div className="exchange-card-content font-weight-bold">
          <strong>{name}</strong>
          <br />
          <span className="font-weight-medium" dangerouslySetInnerHTML={{ __html: feePayback }}></span>
          <br />
          <span className="exchange-card-pricing font-weight-medium">
            지정가 <strong className="font-weight-bold">{limitOrderFee}</strong> / 시장가 <strong className="font-weight-bold">{marketOrderFee}</strong> 🔥
          </span>
        </div>
      </div>
      <div className="exchange-card-actions">
        <strong>가입하기</strong>
        <strong>가입</strong>
        <img src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="Right arrow" className="right-arrow-icon" />
      </div>
    </a>
  );
}

export default ExchangeCard;
