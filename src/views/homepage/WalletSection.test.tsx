import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletSection from './WalletSection';
import { features } from './dummy';

it('displays wallet section title', () => {
  render(<WalletSection features={features}/>);
  const title = screen.getByRole('heading', { name: 'Wallet section title' })
  expect(title).toBeInTheDocument();
})

it('displays wallet feature image', () => {
  render(<WalletSection features={features}/>);
  const title = screen.getByRole('img', { name: 'Wallet features image' })
  expect(title).toBeInTheDocument();
})

it('clicking on a feature will display the description', () => {
  render(<WalletSection features={features}/>);

  const targetFeature = screen.getByRole('heading', { name: features[1].title });
  expect(screen.getByText(features[0].description)).toBeInTheDocument();
  expect(screen.queryByText(features[1].description)).toBeNull();

  userEvent.click(targetFeature);
  expect(screen.getByText(features[1].description)).toBeInTheDocument();
  expect(screen.queryByText(features[0].description)).toBeNull();
})

it('displays a Get Started button', () => {
  render(<WalletSection features={features} />)

  expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument();
})