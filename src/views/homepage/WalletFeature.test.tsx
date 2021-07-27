import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletFeature from './WalletFeature';

it('should display title and description of feature if active', () => {
  render(<WalletFeature
    id={1}
    setActiveFeature={(id: number) => {}}
    title="Test feature"
    description="Test description"
    active={true}
  />)

  expect(screen.getByRole('heading', { name: 'Test feature' })).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();
})

it('should display title but not description if inactive', () => {
  render(<WalletFeature
    id={1}
    setActiveFeature={(id: number) => {}}
    title="Test feature"
    description="Test description"
    active={false}
  />)

  expect(screen.getByRole('heading', { name: 'Test feature' })).toBeInTheDocument();
  expect(screen.queryByText('Test description')).toBeNull();
})