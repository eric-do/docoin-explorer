import React from 'react';
import HomepageHero from './HomepageHero';
import WalletSection from './WalletSection';
import { features } from './data';

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <WalletSection features={features}/>
    </div>
  );
};

export default Homepage