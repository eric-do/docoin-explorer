import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardSection from './DashboardSection';

it('renders section with title and description', () => {
  render(
    <DashboardSection
      title="Test title"
      description="Test description"
    />
  );

  expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name:'Test description' })).toBeInTheDocument();
});