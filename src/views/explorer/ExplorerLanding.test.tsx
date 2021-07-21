import React from 'react';
import { render, screen } from '@testing-library/react';
import ExplorerLanding from './ExplorerLanding'

it('renders section header', () => {
  render(<ExplorerLanding />);
  expect(screen.getByRole(
    'heading',
    { name: 'Bitcoin' }
  )).toBeInTheDocument();

  expect(screen.getByRole(
    'heading',
    { name: `Blockchain information for Bitcoin (BTC) `
             + `including historical prices, the most recently `
             + `mined blocks, the mempool size of unconfirmed `
             + `transactions, and data for the latest transactions.` }
  )).toBeInTheDocument();
});

it('renders Latest Blocks section', () => {
  render(<ExplorerLanding />);
  expect(screen.getByRole(
    'heading',
    { name: 'Latest Blocks' }
  )).toBeInTheDocument();
});

it('renders Latest Transactions section', () => {
  render(<ExplorerLanding />);
  expect(screen.getByRole(
    'heading',
    { name: 'Latest Transactions' }
  )).toBeInTheDocument();
});