import React from 'react';
import ExchangeCard from './ExchangeCard';

function ExchangeOffers() {
  return (
    <div className="exchange-offers font-weight-medium">
      <div className="exchange-offers-left">
        <div>
        <img src="/coin.png" alt="description" />
          <div>
            <span className="font-weight-medium">이미 거래소에 가입한 계정이 있어도</span>
            <strong className="font-weight-bold">레퍼럴을 새로 설정할 수 있어요!</strong>
          </div>
        </div>
        <button className="font-weight-bold">레퍼럴 변경법 확인하기</button>
      </div>
      <div className="exchange-offers-right">
        <ExchangeCard
          img="/bingx_logo.jpg"
          name="BingX"
          feePayback='업계 최저 평생 수수료 페이백 <strong className="font-weight-bold">45%</strong>'
          limitOrderFee="0.011"
          marketOrderFee="0.0275"
          link="https://www.bingx.com"
        />
        <ExchangeCard
          img="/bybit_logo.jpg"
          name="BYBIT"
          feePayback='업계 최저 평생 수수료 할인 <strong className="font-weight-bold">20%</strong>'
          limitOrderFee="0.02"
          marketOrderFee="0.044"
          link="https://www.bybit.com"
        />
        <ExchangeCard
          img="/bitget_logo.jpg"
          name="Bitget"
          feePayback='평생 수수료 할인 <strong className="font-weight-bold">50%</strong> + 페이백 <strong className="font-weight-bold">20%</strong>'
          limitOrderFee="0.016"
          marketOrderFee="0.032"
          link="https://www.bitget.com"
        />
        <ExchangeCard
          img="/okx_logo.jpg"
          name="OKX"
          feePayback='업계 최저 평생 수수료 할인 <strong className="font-weight-bold">20%</strong>'
          limitOrderFee="0.016"
          marketOrderFee="0.04"
          link="https://www.okx.com"
        />
      </div>
    </div>
  );
}

export default ExchangeOffers;
