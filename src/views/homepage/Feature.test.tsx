import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Feature from './Feature';

const styles = {
  primaryColor: 'rgb(12, 108, 242)',
  backgroundColor: 'rgb(245, 250, 254)',
  activeColor: 'rgb(236, 245, 254)',
  borderColor: 'rgb(222, 216, 253)'
}

it('should display title and description of feature if active', () => {
  render(<Feature
    id={1}
    setActiveFeature={(id: number) => {}}
    title="Test feature"
    description="Test description"
    active={true}
    styles={styles}
  />)

  expect(screen.getByRole('heading', { name: 'Test feature' })).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();
})

it('should display title but not description if inactive', () => {
  render(<Feature
    id={1}
    setActiveFeature={(id: number) => {}}
    title="Test feature"
    description="Test description"
    active={false}
    styles={styles}
  />)

  expect(screen.getByRole('heading', { name: 'Test feature' })).toBeInTheDocument();
  expect(screen.queryByText('Test description')).toBeNull();
})