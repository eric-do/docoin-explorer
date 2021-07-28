import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeatureSection from './FeatureSection';
import { walletFeatures } from './data';

const sectionContent = {
  label: 'Test label',
  title: 'Section test title',
  features: walletFeatures,
  button: 'Test button'
}

const sectionStyles = {
  primaryColor: 'rgb(115, 73, 242)',
  backgroundColor: 'rgb(247, 245, 255)',
  activeColor: 'rgb(239, 236, 254)',
  borderColor: 'rgb(222, 216, 253)'
}

it('displays section title', () => {
  render(<FeatureSection
    content={sectionContent}
    styles={sectionStyles}
  />);

  const title = screen.getByRole('heading', { name: 'Feature section title' })
  expect(title).toBeInTheDocument();
})

it('displays wallet feature image', () => {
  render(<FeatureSection
    content={sectionContent}
    styles={sectionStyles}
  />);

  const title = screen.getByRole('img', { name: 'Section features image' })
  expect(title).toBeInTheDocument();
})

it('clicking on a feature will display the description', () => {
  render(<FeatureSection
    content={sectionContent}
    styles={sectionStyles}
  />);

  const targetFeature = screen.getByRole('heading', { name: walletFeatures[1].title });
  expect(screen.getByText(walletFeatures[0].description)).toBeInTheDocument();
  expect(screen.queryByText(walletFeatures[1].description)).toBeNull();

  userEvent.click(targetFeature);
  expect(screen.getByText(walletFeatures[1].description)).toBeInTheDocument();
  expect(screen.queryByText(walletFeatures[0].description)).toBeNull();
})

it('displays a Get Started button', () => {
  render(<FeatureSection
    content={sectionContent}
    styles={sectionStyles}
  />);

  expect(screen.getByRole('button', { name: sectionContent.button })).toBeInTheDocument();
})