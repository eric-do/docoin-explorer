import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('renders the homepage by default', () => {
  render(<App />);
  const title = screen.getByRole('heading', { name: 'Homepage title' });
  expect(title).toBeInTheDocument();
});

it('renders the homepage when user clicks Navbar brand link', () => {
  render(<App />);

  const homepageLink = screen.getByRole(
    'link',
    { name: 'Homepage link'}
  );
  userEvent.click(homepageLink);

  const title = screen.getByRole('heading', { name: 'Homepage title' });
  expect(title).toBeInTheDocument();
})

it('renders the Explorer section when user clicks Navbar link', () => {
  render(<App />);

  const explorerLink = screen.getByRole(
    'link',
    { name: 'Explorer'}
  );
  userEvent.click(explorerLink);
  expect(screen.getByRole(
    'heading',
    { name: 'Explorer page title'}
  )).toBeInTheDocument();
})

it('should display and hide menu on button click', () => {
  render(<App />);
  const navBarButton = screen.getAllByRole('button', { name: 'Buy Docoin'})[0];
  userEvent.click(navBarButton);
  expect(screen.getByLabelText('Buy Docoin menu')).toBeInTheDocument();
});