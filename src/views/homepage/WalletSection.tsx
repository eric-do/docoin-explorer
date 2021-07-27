import React from 'react';
import Styled, { css } from 'styled-components';
import mobilePhoneImage from './assets/wallet-control-funds@2x.png'
import WalletFeature from './WalletFeature';

const StyledSection = Styled.div``

const StyledContainer = Styled.div`
  background-color: rgba(239, 236, 254, 0.5);
  border-radius: 10px;
`

const Columns = Styled.div``;

const Column = Styled.div`
  color: rgb(115, 73, 242);
`;

const LeftColumn = Styled(Column)`
  padding: 70px 0 70px 140px;
`;

const RightColumn = Styled(Column)`
  padding-left: 140px;
`

const BaseSectionFont = css`
  color: rgb(115, 73, 242);
`;

const Title = Styled.h2`
  ${BaseSectionFont}
`

const SectionImage = Styled.img``

interface WalletProps {
  features: {
    title: string;
    description: string;
    image: string;
  }[]
}

const WalletSection = ({features}: WalletProps) => {
  const [activeFeature, setActiveFeature] = React.useState<number>(0);

  return (
    <StyledSection className="section">
      <StyledContainer className="container">
        <Columns className="columns">
          <LeftColumn className="column">
            <Title
              className="title is-2 has-text-left"
              aria-label="Wallet section title"
            >
              The Easiest and Most Powerful Crypto Wallet
            </Title>
            {
              features.map((feature, i) => (
                <WalletFeature
                  {...feature}
                  active={i === activeFeature}
                  id={i}
                  setActiveFeature={setActiveFeature}
                  key={i}
                />)
              )
            }
          </LeftColumn>
          <RightColumn className="column">
            <SectionImage
              src={mobilePhoneImage}
              aria-label="Wallet features image"
            />
          </RightColumn>
        </Columns>
      </StyledContainer>
    </StyledSection>
  );
};

export default WalletSection;