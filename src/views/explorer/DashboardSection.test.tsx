import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardSection from './DashboardSection';

it('renders section with title, description, children, button', () => {
  const button = {
    text: 'test button',
    url: '/test-url'
  }
  render(
    <DashboardSection
      title="Test title"
      description="Test description"
      button={button}
    >
      <div>Test children</div>
    </DashboardSection>
  );

  expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name:'Test description' })).toBeInTheDocument();
  expect(screen.getByText('Test children')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'test button'})).toBeInTheDocument();
});

it('does not render button if one is not passed', () => {
  render(
    <DashboardSection
      title="Test title"
      description="Test description"
    >
      <div>Test children</div>
    </DashboardSection>
  );

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});