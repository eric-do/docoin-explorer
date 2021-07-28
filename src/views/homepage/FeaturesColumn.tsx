import React from 'react';
import Styled  from 'styled-components';
import Feature from './Feature';
import { device } from '../../utils/media';
import { IFeature } from './types';

const LeftColumn = Styled.div`
  padding: 5rem 0 5rem 9rem;

  @media ${device.mobile} {
    padding: 5rem 2rem;
  }
`;

const Title = Styled.h2<{ primaryColor: string }>`
  color: ${p => p.primaryColor}
`

const GetStartedButton = Styled.button<{ backgroundColor: string}>`
  background-color: ${p => p.backgroundColor};
  border-radius: 0.75rem;
  margin-top: 2rem;
`;

interface ColumnProps {
  content: {
    label: string;
    title: string;
    features: IFeature[];
    button: string;
  };
  styles: {
    primaryColor: string;
    backgroundColor: string;
    activeColor: string;
  };
}

const FeatureColumn = ({ content: {title, features, button }, styles}: ColumnProps) => {
  const [activeFeature, setActiveFeature] = React.useState<number>(0);

  return (
    <LeftColumn className="column">
      <Title
        className="title is-2 has-text-left"
        aria-label="Feature section title"
        primaryColor={styles.primaryColor}
      >
        {title}
      </Title>
      {
        features.map((feature, i) => (
          <Feature
            {...feature}
            active={i === activeFeature}
            id={i}
            setActiveFeature={setActiveFeature}
            key={i}
            styles={styles}
          />)
        )
      }
      <div className="level">
        <div className="level-left">
          <GetStartedButton
            className="button has-text-white is-medium"
            backgroundColor={styles.primaryColor}
          >
            {button}
          </GetStartedButton>
        </div>
      </div>
    </LeftColumn>
  )
};

export default FeatureColumn;