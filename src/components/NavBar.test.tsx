import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';
import { User } from 'netlify-identity-widget';
import { authContext, AuthContext } from '../contexts/AuthContext';

const NavBarWithRouter = () => (
  <Router>
    <NavBar/>
  </Router>
)

const defaultAuth = {
  isAuthenticated: false,
  user: null,
  signin: (cb: (user: User | null) => void) => {},
  signout: (cb: () => void) => {},
};

const customRender = (
  ui: JSX.Element,
  {providerProps}: {providerProps: React.ProviderProps<AuthContext>}
) => {
  return render(
    <authContext.Provider {...providerProps}>{ui}</authContext.Provider>
  )
}

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

it('renders Login CTA by default', () => {
  render(<NavBarWithRouter />);
  expect(screen.getByRole(
    'button',
    { name: 'Log In' }
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

it('should not display Log In button if user is authenticated', () => {
  const providerProps = {
    value: {
      ...defaultAuth,
      isAuthenticated: true
    }
  };

  customRender(<NavBarWithRouter />, { providerProps });

  expect(screen.queryByRole('button', { name: 'Log In' })).toBeNull();
})