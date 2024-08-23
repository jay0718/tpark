import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-section contact-telegram">
        <h3 className="contact-title font-weight-bold">거래소 가입을 완료하셨나요?</h3>
        <p className="contact-description font-weight-medium">
          차트 공부방에서 저희와 함께해요 어쩌구 저쩌구
        </p>
        <button className="contact-button contact-telegram-button font-weight-medium">텔레그램 입장하기</button>
      </div>
      {/* <div className="contact-section contact-support">
        <h3 className="contact-title font-weight-bold">궁금한점이 있으신가요?</h3>
        <p className="contact-description font-weight-medium">
          24시간 상주 대기하고 있는 채팅 상담사가 도움을 드립니다
          몇 분 내 연결이 되니 조금만 기다려주세요!
        </p>
        <button className="contact-button contact-support-button font-weight-medium">고객센터 문의하기</button>
      </div> */}
    </div>
  );
}

export default Contact;
