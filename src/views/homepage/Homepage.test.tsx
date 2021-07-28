import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

it('should render Hero section', () => {
  render(<Homepage />);

  const title = screen.getByRole('heading', { name: 'Homepage title' });
  const description = screen.getByRole('heading', { name: 'Homepage subtitle' });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
})

it('displays wallet section', () => {
  render(<Homepage />);
  const title = screen.getByRole('heading', { name: 'Wallet section title' })
  expect(title).toBeInTheDocument();
})

