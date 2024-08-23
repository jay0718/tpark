import React, { useRef } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ReferralTitle from './ReferralTitle';
import ExchangeOffers from './ExchangeOffers';
import Events from './Events';
import Contact from './Contact';
import Landing from './Landing';

function App() {
  // Create a ref for the ReferralTitle component
  const referralTitleRef = useRef(null);

  // Function to handle scrolling
  const scrollToReferralTitle = () => {
    if (referralTitleRef.current) {
      referralTitleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="body">
      <Header />
      <main>
        <div className="main-container">
          {/* Pass the scroll function to the Landing component */}
          <Landing onFindExchangeClick={scrollToReferralTitle} />
          {/* Assign the ref to the ReferralTitle component */}
          <div className='referral-title-container' ref={referralTitleRef}>
            <ReferralTitle />
          </div>
          <ExchangeOffers />
          <Events />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
