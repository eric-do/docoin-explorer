import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app title', () => {
  render(<App />);
  expect(screen.getByText('Docoin Explorer')).toBeInTheDocument();
});

it('renders Latest Blocks section', () => {
  render(<App />);
  expect(screen.getByText('Latest Blocks')).toBeInTheDocument();
});