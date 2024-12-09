import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-section contact-telegram">
        <h3 className="contact-title font-weight-bold">거래소 가입을 완료하셨나요?</h3>
        <p className="contact-description font-weight-medium">
          차트 공부방에서 저희와 함께 매매해요.
        </p>
        <a href="https://discord.com/invite/Jkgc3jXE3A" target="_blank" rel="noopener noreferrer">
          <button className="contact-button contact-telegram-button font-weight-medium">디스코드 입장하기</button>
        </a>

      </div>
    </div>
  );
}

export default Contact;
