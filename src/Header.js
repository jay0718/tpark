import React from 'react';

function Header() {
  return (
    <header className="header font-weight-bold">
      <div className="header-container">
        <div className="header-left">
          <a href="#" className="logo">Tpark Youtube</a>
        </div>
        <div className="header-right">
          <a className="active" href="#">홈</a>
          <a href="#">레퍼럴</a>
          <a href="#">텔레그램</a>
          <a href="#">문의하기</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
