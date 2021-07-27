import React from 'react';
import Styled, { css } from 'styled-components';

const BaseSectionFont = css`
  color: rgb(115, 73, 242);
  `;

interface ContainerProps {
  active: boolean;
}

const FeatureContainer = Styled.div<ContainerProps>`
  background-color: ${p => p.active ?'rgb(239, 236, 254)': 'rgb(247, 245, 255)'};
  border-radius: 0.75rem;
  border: 0.0625rem solid rgb(222, 216, 253);
  margin-bottom: 0.75rem;
  padding: 1rem 6rem 1rem 1.25rem;
  cursor: pointer;
`

const FeatureTitle = Styled.h3`
  ${BaseSectionFont}
`

const FeatureDescription = Styled.p`
  ${BaseSectionFont}
`

interface FeatureProps {
  id: number;
  title: string;
  description: string;
  active: boolean;
  setActiveFeature: (id: number) => void;
}

const WalletFeature = ({
  id,
  title,
  description,
  setActiveFeature,
  active}: FeatureProps) => {

  return (
    <FeatureContainer
      onClick={() => setActiveFeature(id)}
      className="has-text-left"
      active={active}
    >
      <div className="block">
        <FeatureTitle className="title is-6">{title}</FeatureTitle>
        {active && <FeatureDescription className="subtitle is-6">{description}</FeatureDescription>}
      </div>
    </FeatureContainer>
  )
}

export default WalletFeature;