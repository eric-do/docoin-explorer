import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

it('renders app title', () => {
  render(<NavBar />);
  expect(screen.getByText('Docoin Explorer')).toBeInTheDocument();
});