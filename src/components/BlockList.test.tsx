import React from 'react';
import { render, screen } from '@testing-library/react';
import BlockList from './BlockList';

it('renders section desription', () => {
  render(<BlockList />);
  expect(screen.getByText('Latest Blocks')).toBeInTheDocument();
});

it('Renders table', () => {
  render(<BlockList />);
  expect(screen.getByRole('table')).toBeInTheDocument();
});

it('Table renders correct headers', () => {
  const headers = [
    'Height',
    'Age',
    'Miner',
    'Volume'
  ]
  render(<BlockList />);

  for (const h of headers) {
    expect(screen.getByText(h)).toBeInTheDocument();
  }
});
