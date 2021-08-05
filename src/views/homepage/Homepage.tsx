import React from 'react';
import { useQuery } from 'react-query';
import HomepageHero from './HomepageHero';
import FeatureSection from './FeatureSection';
import { walletFeatures, exchangeFeatures } from './data';
import { getLatestMarketInfo } from '../../api/coinmarketcap';
import CoinCards from './CoinCards';
import styled from 'styled-components';

const HomepageContainer = styled.div`
  position: relative;
`

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
  const { data: marketData } = useQuery('currencies', getLatestMarketInfo);

  return (
    <HomepageContainer>
      <HomepageHero />
      { marketData && <CoinCards currencies={marketData.data} />}
      <FeatureSection
        content={walletContent}
        styles={walletStyles}
      />
      <FeatureSection
        content={exchangeContent}
        styles={exchangeStyles}
      />
    </HomepageContainer>
  );
};

export default Homepage