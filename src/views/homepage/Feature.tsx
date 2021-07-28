import React from 'react';
import Styled from 'styled-components';
import { IStyle } from './types';

interface ContainerProps {
  styles: IStyle;
  active: boolean;
}

const FeatureContainer = Styled.div<ContainerProps>`
  background-color: ${p => p.active ? p.styles.activeColor: p.styles.backgroundColor};
  border-radius: 0.75rem;
  border: 0.0625rem solid ${p => p.styles.borderColor};
  margin-bottom: 0.75rem;
  padding: 1rem 6rem 1rem 1.25rem;
  cursor: pointer;
`

const FeatureTitle = Styled.h3<{ styles: IStyle }>`
  color: ${p => p.styles.primaryColor}
`

const FeatureDescription = Styled.p<{ styles: IStyle }>`
  color: ${p => p.styles.primaryColor}
`

interface FeatureProps {
  id: number;
  title: string;
  description: string;
  active: boolean;
  setActiveFeature: (id: number) => void;
  styles: IStyle;
}

const WalletFeature = ({
  id,
  title,
  description,
  setActiveFeature,
  active,
  styles
}: FeatureProps) => {

  return (
    <FeatureContainer
      onClick={() => setActiveFeature(id)}
      className="has-text-left"
      active={active}
      styles={styles}
    >
      <div className="block">
        <FeatureTitle styles={styles} className="title is-6">{title}</FeatureTitle>
        {active &&
          <FeatureDescription
            styles={styles}
            className="subtitle is-6"
          >
            {description}
          </FeatureDescription>}
      </div>
    </FeatureContainer>
  )
}

export default WalletFeature;