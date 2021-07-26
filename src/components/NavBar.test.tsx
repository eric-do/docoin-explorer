import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

const NavBarWithRouter = () => (
  <Router>
    <NavBar/>
  </Router>
)

it('renders app title', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'heading',
    { name: 'Docoin.com' }
  )).toBeInTheDocument();
});

it('renders purchase CTA', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'button',
    { name: 'Buy Docoin' }
  )).toBeInTheDocument();
});

it('renders trade CTA', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'button',
    { name: 'Trade' }
  )).toBeInTheDocument();
});

it('renders NavBar links', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'link',
    { name: 'Wallet' }
  )).toBeInTheDocument();
  expect(screen.getByRole(
    'link',
    { name: 'Exchange' }
  )).toBeInTheDocument();
  expect(screen.getByRole(
    'link',
    { name: 'Explorer' }
  )).toBeInTheDocument();
});

it('renders a search input field', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole('textbox', { name: 'Search field' })).toBeInTheDocument()
})

it('renders text typed by the user in the input field', () => {
  render(<NavBarWithRouter />);

  const inputField = screen.getByRole(
    'textbox',
    { name: 'Search field' }
  );

  userEvent.type(inputField, 'test');
  expect(inputField).toHaveValue('test');
})