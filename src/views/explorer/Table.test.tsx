import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

it('renders section and table correctly', () => {
  const blockData = [
    {
      key: 'merkle_root',
      height: 1,
      age: '2 days ago',
      miner: 'eric',
      amount: 50
    },
    {
      key: 'merkle_root2',
      height: 2,
      age: '3 days ago',
      miner: 'Tina',
      amount: 10
    }
  ]
  const formattedBlocks = blockData.map(data => {
    const [key, ...fields] = Object.values(data);
    return { key, fields }
  })

  const headers = [ 'Height', 'Age', 'Miner', 'Volume'];
  const linkedColumns = {
    0: '/dcn/block/',
    2: '/dcn/address/'
  }
  render(<Table
    headers={headers}
    data={formattedBlocks}
    linkedColumns={linkedColumns}
  />);

  expect(screen.getByRole('table')).toBeInTheDocument();

  headers.forEach(header => expect(screen.getByText(header)).toBeInTheDocument());

  formattedBlocks.forEach(block => {
    block.fields.forEach(field => {
      expect(screen.getByText(field)).toBeInTheDocument()
    })
  })

  expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument()
});