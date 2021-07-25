import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BuyMenu from './BuyMenu';

it('should render image and button', () => {
  render(<BuyMenu />);
  expect(screen.getByRole('button', { name: 'Buy Docoin' })).toBeInTheDocument();
});

it('should display and hide menu on button click', () => {
  render(<BuyMenu />);
  const button = screen.getByRole('button', { name: 'Buy Docoin' });
  userEvent.click(button);
  expect(screen.getByRole('menu')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Buy Docoin'})).toBeInTheDocument();
  expect(screen.getByRole('spinbutton', { name: 'amount'})).toBeInTheDocument()
  expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
});

it('should display typed text in input fields', () => {
  render(<BuyMenu />);
  const button = screen.getByRole('button', { name: 'Buy Docoin' });
  userEvent.click(button);

  const amountInput = screen.getByRole('spinbutton', { name: 'amount'});
  userEvent.type(amountInput, '21')
  expect(amountInput).toHaveValue(21)

  const emailInput = screen.getByLabelText('Your Email');
  userEvent.type(emailInput, 'test@user.com')
  expect(emailInput).toHaveValue('test@user.com')
});

it('should not take alphabet characters in the amount field', () => {
  render(<BuyMenu />);
  const button = screen.getByRole('button', { name: 'Buy Docoin' });
  userEvent.click(button);

  const amountInput = screen.getByRole('spinbutton', { name: 'amount'});
  userEvent.type(amountInput, 'a21')
  expect(amountInput).toHaveValue(21)
});