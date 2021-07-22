import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BuyMenu from './BuyMenu';

it('should render image and button', () => {
  render(<BuyMenu />);
  expect(screen.getByRole('button', { name: 'Buy Docoin' })).toBeInTheDocument();
});

it('should display menu on button click', () => {
  render(<BuyMenu />);
  const button = screen.getByRole('button', { name: 'Buy Docoin' });
  userEvent.click(button);
  expect(screen.getByRole('menu')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
});