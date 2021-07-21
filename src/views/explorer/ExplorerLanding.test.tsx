import React from 'react';
import { render, screen } from '@testing-library/react';
import ExplorerLanding from './ExplorerLanding'

it('renders section header', () => {
  render(<ExplorerLanding />);
  expect(screen.getByRole(
    'heading',
    { name: 'Docoin' }
  )).toBeInTheDocument();

  expect(screen.getByRole(
    'heading',
    { name: `Docoin information for Docoin (DCN) `
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