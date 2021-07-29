import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import LoginButton from './LoginButton';

it('should display Log In text', () => {
  render(<LoginButton />)

  expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument();
})