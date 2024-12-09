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
          <a href="https://litt.ly/tpark">레퍼럴</a>
          <a href="https://discord.com/invite/Jkgc3jXE3A">디스코드</a>
          <a href="https://discord.com/invite/Jkgc3jXE3A">문의하기</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
