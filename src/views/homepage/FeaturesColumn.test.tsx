import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeatureColumn from './FeaturesColumn';
import { walletFeatures } from './data';

const testContent = {
  title: "Feature column title",
  features: walletFeatures,
  button: "Test button",
  label: "Test label"
}

const testStyles = {
  primaryColor: 'rgb(115, 73, 242)',
  backgroundColor: 'rgba(239, 236, 254, 0.5)',
  activeColor: 'rgb(239, 236, 254)',
  borderColor: 'rgb(222, 216, 253)'
}

it('displays wallet section title', () => {
  render(<FeatureColumn content={testContent} styles={testStyles} />);

  const title = screen.getByRole('heading', { name: 'Feature section title' })
  expect(title).toBeInTheDocument();
})

it('clicking on a feature will display the description', () => {
  render(<FeatureColumn content={testContent} styles={testStyles} />);

  const targetFeature = screen.getByRole('heading', { name: walletFeatures[1].title });
  expect(screen.getByText(walletFeatures[0].description)).toBeInTheDocument();
  expect(screen.queryByText(walletFeatures[1].description)).toBeNull();

  userEvent.click(targetFeature);
  expect(screen.getByText(walletFeatures[1].description)).toBeInTheDocument();
  expect(screen.queryByText(walletFeatures[0].description)).toBeNull();
})

it('displays a Get Started button', () => {
  render(<FeatureColumn content={testContent} styles={testStyles} />);

  expect(screen.getByRole('button', { name: 'Test button' })).toBeInTheDocument();
})