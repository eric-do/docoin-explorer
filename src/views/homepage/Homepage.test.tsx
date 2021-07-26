import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Homepage from './Homepage';

it('should display heading and description', () => {
  render(<Homepage />);

  const title = screen.getByRole('heading', { name: 'Homepage title' });
  const description = screen.getByRole('heading', { name: 'Homepage subtitle' });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
})

it('should display Get Started and Log In buttons', () => {
  render(<Homepage />);

  const getStarted = screen.getByRole('button', { name: 'Get Started' });
  const logIn = screen.getByRole('button', { name: 'Log In' });

  expect(getStarted).toBeInTheDocument();
  expect(logIn).toBeInTheDocument();
})

it('should render Buy Docoin button', () => {
  render(<Homepage />);
  expect(screen.getByRole('button', { name: 'Buy Docoin' })).toBeInTheDocument();
});