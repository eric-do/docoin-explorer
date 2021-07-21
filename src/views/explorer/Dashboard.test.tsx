import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './DashBoard'

it('renders Latest Blocks section', () => {
  render(<Dashboard />);
  expect(screen.getByRole(
    'heading',
    { name: 'Latest Blocks' }
  )).toBeInTheDocument();
});

it('renders Latest Transactions section', () => {
  render(<Dashboard />);
  expect(screen.getByRole(
    'heading',
    { name: 'Latest Transactions' }
  )).toBeInTheDocument();
});