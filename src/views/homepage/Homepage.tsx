import React from 'react';
import Styled from 'styled-components';
import heroGradient from '../../assets/home-hero-gradient.svg'
import BuyMenu from '../../components/BuyMenu';

const StyledHero = Styled.section`
  background-image: url(${heroGradient});
  background-size: cover;
  background-position: center bottom;
`;

const Homepage = () => {
  return (
    <div>
      <StyledHero className="hero is-medium">
        <div className="hero-body has-text-left">
          <h1 className="title is-1 has-text-white" aria-label="Homepage title">
            A better way to buy, sell, and trade crypto
          </h1>
          <h2 className="subtitle is-4 has-text-grey-lighter" aria-label="Homepage subtitle">
            Trusted by some people since 2021 with over $8 in crypto transactions.
          </h2>

          <div className="level">
            <div className="level-left">
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-primary">Get Started</button>
                </p>
                <p className="control">
                  <button className="button is-light">Log In</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledHero>
      <BuyMenu />
    </div>
  );
};

export default Homepage