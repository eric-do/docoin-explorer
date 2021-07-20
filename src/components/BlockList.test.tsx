import React from 'react';
import { render, screen } from '@testing-library/react';
import BlockList from './BlockList';
import { blockchain } from '../dummy';
import { timeDifference } from '../utils';

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

  render(<BlockList
    title="Test title"
    description="Test description"
    headers={headers}
    data={formattedBlocks}
  />);
  expect(screen.getByText('Latest Blocks')).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText('Latest Blocks')).toBeInTheDocument();
  formattedBlocks.forEach(block => {
    block.fields.forEach(field => {
      expect(screen.getByText(field)).toBeInTheDocument()
    })
  })
  headers.forEach(header => expect(screen.getByText(header)).toBeInTheDocument())
});