import React from 'react';
import HomepageHero from './HomepageHero';
import FeatureSection from './FeatureSection';
import { walletFeatures } from './data';

const walletContent = {
  label: 'Wallet',
  title: 'The Easiest and Most Powerful Crypto Wallet',
  features: walletFeatures,
  button: 'Get started'
}

const walletStyles = {
  primaryColor: 'rgb(115, 73, 242)',
  backgroundColor: 'rgb(247, 245, 255)',
  activeColor: 'rgb(239, 236, 254)'
}

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <FeatureSection
        content={walletContent}
        styles={walletStyles}
      />
    </div>
  );
};

export default Homepage