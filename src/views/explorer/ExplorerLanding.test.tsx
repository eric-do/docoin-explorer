import React from 'react';
import { render, screen } from '@testing-library/react';
import ExplorerLanding from './ExplorerLanding'

it('renders section header', () => {
  render(<ExplorerLanding />);
  expect(screen.getByRole(
    'heading',
    { name: 'Explorer page subtitle' }
  )).toBeInTheDocument();

  expect(screen.getByRole(
    'heading',
    { name: 'Explorer page subtitle' }
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