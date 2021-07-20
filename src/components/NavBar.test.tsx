import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

it('renders app title', () => {
  render(<NavBar />);
  expect(screen.getByRole(
    'heading',
    { name: 'Docoin Explorer' }
  )).toBeInTheDocument();
});

it('renders purchase CTA', () => {
  render(<NavBar />);
  expect(screen.getByRole(
    'button',
    { name: 'Buy Docoin' }
  )).toBeInTheDocument();
});