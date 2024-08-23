import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ReferralTitle from './ReferralTitle';
import ExchangeOffers from './ExchangeOffers';
import Indicators from './Indicators';
import Events from './Events';
import Contact from './Contact';

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <div className="main-container">
          <ReferralTitle />
          <ExchangeOffers />
          <Indicators />
          <Events />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
