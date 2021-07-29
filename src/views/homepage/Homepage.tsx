import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import HomepageHero from './HomepageHero';
import FeatureSection from './FeatureSection';
import { walletFeatures, exchangeFeatures } from './data';
import { getLatestMarketInfo } from '../../api/coinmarketcap';
import { IHistoricalCrypto } from '../../types';
import CoinCards from './CoinCards';

const walletContent = {
  label: 'Wallet',
  title: 'The Easiest and Most Powerful Crypto Wallet',
  features: walletFeatures,
  button: 'Get started'
}

const walletStyles = {
  primaryColor: 'rgb(115, 73, 242)',
  backgroundColor: 'rgb(247, 245, 255)',
  activeColor: 'rgb(239, 236, 254)',
  borderColor: 'rgb(222, 216, 253)'
}

const exchangeContent = {
  label: 'Exchange',
  title: 'Lightning-Fast Crypto Trading',
  features: exchangeFeatures,
  button: 'Trade now'
}

const exchangeStyles = {
  primaryColor: 'rgb(12, 108, 242)',
  backgroundColor: 'rgb(245, 250, 254)',
  activeColor: 'rgb(236, 245, 254)',
  borderColor: 'rgb(216, 235, 253)'
}

const Homepage = () => {
  const { isLoading, error, data } = useQuery('currencies', getLatestMarketInfo);


  return (
    <div>
      <HomepageHero />
      { data && <CoinCards currencies={data.data} />}
      <FeatureSection
        content={walletContent}
        styles={walletStyles}
      />
      <FeatureSection
        content={exchangeContent}
        styles={exchangeStyles}
      />
    </div>
  );
};

export default Homepage