import React from 'react';
import Styled from 'styled-components';
import mobilePhoneImage from './assets/wallet-control-funds@2x.png'
import FeatureColumn from './FeaturesColumn';
import ImageColumn from './ImageColumn';
import { IFeaturesContent, IStyle } from './types';

const StyledSection = Styled.div``

const StyledContainer = Styled.div`
  background-color: rgba(239, 236, 254, 0.5);
  border-radius: 10px;
`

const Columns = Styled.div``;

interface WalletProps {
  content: IFeaturesContent;
  styles: IStyle;
}

const FeatureSection = ({content, styles}: WalletProps) => {
  return (
    <StyledSection className="section">
      <StyledContainer className="container">
        <Columns className="columns">
          <FeatureColumn
            content={content}
            styles={styles}
          />
          <ImageColumn image={mobilePhoneImage} />
        </Columns>
      </StyledContainer>
    </StyledSection>
  );
};

export default FeatureSection;