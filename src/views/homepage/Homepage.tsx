import React from 'react';
import BuyMenu from '../../components/BuyMenu';
import HomepageHero from './HomepageHero';
import WalletSection from './WalletSection';
import { features } from './dummy';

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <WalletSection features={features}/>
      <BuyMenu />
    </div>
  );
};

export default Homepage