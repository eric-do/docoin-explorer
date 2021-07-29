import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import LogoutButton from './LogoutButton';

it('should display Log Out text', () => {
  render(<LogoutButton />)

  expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument();
})