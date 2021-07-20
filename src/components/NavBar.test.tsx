import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar';

const NavBarWithRouter = () => (
  <Router>
    <NavBar/>
  </Router>
)

it('renders app title', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'heading',
    { name: 'Docoin Explorer' }
  )).toBeInTheDocument();
});

it('renders purchase CTA', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'button',
    { name: 'Buy Docoin' }
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