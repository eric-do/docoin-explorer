import React from 'react';
import { render, screen } from '@testing-library/react';
import BuyMenu from './BuyMenu';

it('should render image and button', () => {
  render(<BuyMenu />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});