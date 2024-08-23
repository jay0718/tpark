import React from 'react';
import './Landing.css';

function Landing({ onFindExchangeClick }) {
  return (
    <div className="landing-container">
      <h2 className="landing-title">Tpark과 함께 돈벌기</h2>
      <p className="landing-subtitle">거래소 가입부터 공부까지! 모두 함께해요!</p>
      <div className="landing-steps">
        <div className="landing-step">
          <div className="step-header">STEP 1</div>
          <h3 className="step-title">거래소 신규 가입하기</h3>
          <p className="step-description">
            업계 최대 수수료 할인률로<br/>
            거래소 신규 가입을 진행해요.
          </p>
          <div className="step-image">
          </div>
          <button className="step-button" onClick={onFindExchangeClick}>
            나에게 딱 맞는 거래소 찾기
          </button>
        </div>
        <div className="landing-arrow">
          <img src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="Arrow" />
        </div>
        <div className="landing-step">
          <div className="step-header">STEP 2</div>
          <h3 className="step-title">Tpark 커뮤니티 가입하기</h3>
          <p className="step-description">
            거래소 가입을 완료하셨다면<br/>
            아래 버튼을 통해 텔레그램에 입장해주세요.
          </p>
          <div className="step-image">
          </div>
          <button className="step-button">텔레그램 입장하기</button>
        </div>
        <div className="landing-arrow">
          <img src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="Arrow" />
        </div>
        <div className="landing-step">
          <div className="step-header">STEP 3</div>
          <h3 className="step-title">Tpark 유튜브 강의 시청</h3>
          <p className="step-description">
            Tpark의 알짜배기 강의들을 복습하며<br/>
            비트코인에 대해 더 깊이 이해해요.
          </p>
          <div className="step-image">
          </div>
          <button className="step-button">Tpark 유튜브 바로가기</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
