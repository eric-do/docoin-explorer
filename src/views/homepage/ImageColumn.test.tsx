import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageColumn from './ImageColumn';

it('displays wallet feature image', () => {
  render(<ImageColumn image={'http://test.image.com'}/>);
  const title = screen.getByRole('img', { name: 'Section features image' })
  expect(title).toBeInTheDocument();
})