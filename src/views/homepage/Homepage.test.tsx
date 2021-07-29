import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Homepage from './Homepage';

const queryClient = new QueryClient()

const HomepageWithQueryProvider =
  <QueryClientProvider client={queryClient}>
    <Homepage/>
  </QueryClientProvider>

it('should render Hero section', () => {
  render(HomepageWithQueryProvider);

  const title = screen.getByRole('heading', { name: 'Homepage title' });
  const description = screen.getByRole('heading', { name: 'Homepage subtitle' });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
})