import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardSection from './DashboardSection';

it('renders section with title, description, and children', () => {
  render(
    <DashboardSection
      title="Test title"
      description="Test description"
    >
      <div>Test children</div>
    </DashboardSection>
  );

  expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name:'Test description' })).toBeInTheDocument();
  expect(screen.getByText('Test children')).toBeInTheDocument();
});