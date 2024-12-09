import React from 'react';
import ExchangeCard from './ExchangeCard';

function ExchangeOffers() {
  return (
    <div className="exchange-offers font-weight-medium">
      <div className="exchange-offers-right">
      <ExchangeCard
          img="https://jay0718.github.io/tpark/bitget_logo.jpg"
          name="Bitget"
          // feePayback='평생 수수료 할인 <strong className="font-weight-bold">50%</strong> + 페이백 <strong className="font-weight-bold">20%</strong>'
          feePayback='평생 수수료 할인 <strong className="font-weight-bold">50%</strong>'
          limitOrderFee="0.02"
          marketOrderFee="0.04"
          link="https://partner.bitget.com/bg/VBDPET"
        />
        <ExchangeCard
          img="https://jay0718.github.io/tpark/okx_logo.jpg"
          name="OKX"
          feePayback='업계 최저 평생 수수료 할인 <strong className="font-weight-bold">20%</strong>'
          limitOrderFee="0.016"
          marketOrderFee="0.04"
          link="https://www.okx.com/join/37815687"
        />
        <ExchangeCard
          img="https://jay0718.github.io/tpark/bingx_logo.jpg"
          name="BingX"
          // feePayback='업계 최저 평생 수수료 페이백 <strong className="font-weight-bold">45%</strong>'
          feePayback='평생 수수료 할인 <strong className="font-weight-bold">50%</strong>'
          limitOrderFee="0.02"
          marketOrderFee="0.05"
          link="https://bingx.com/invite/OJLYLDA"
        />
        <ExchangeCard
          img="https://jay0718.github.io/tpark/bybit_logo.jpg"
          name="BYBIT"
          feePayback='업계 최저 평생 수수료 할인 <strong className="font-weight-bold">20%</strong>'
          limitOrderFee="0.02"
          marketOrderFee="0.044"
          link="https://partner.bybit.com/b/Tpark"
        />
      </div>
      <div className="exchange-offers-left">
        <div>
          <div>
            <span className="font-weight-medium">이미 다른 레퍼럴을 사용중이신가요?</span>
            <strong className="font-weight-bold">레퍼럴을 새로 설정할 수 있어요!</strong>
          </div>
        </div>
        <a href="https://spotted-kicker-461.notion.site/152150d529a380818da7cfe28cf0c8cf" target="_blank" rel="noopener noreferrer">
          <button className="font-weight-bold">레퍼럴 변경법 확인하기</button>
        </a>
      </div>
    </div>
  );
}

export default ExchangeOffers;
