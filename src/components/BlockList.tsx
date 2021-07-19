import React from 'react'
import { BlockChain, Transaction } from '../types';
import { blockchain } from '../dummy';

const headers = [
  'Height',
  'Age',
  'Miner',
  'Volume'
]

const BlockList = () => {
  return (
    <div className="section">
      <div className="block">
        Latest Blocks
        <div className="box">
          <table className="table">
            <thead>
              <tr>{ headers.map(h => <th key={h}>{h}</th>) }</tr>
            </thead>
            <tbody>
              {
                blockchain.chain.map(block => (
                  <tr key={block.merkle_root}>
                    <td>{block.index}</td>
                    <td>{block.timestamp}</td>
                    <td>{block.transactions[0].recipient}</td>
                    <td>{block.transactions.reduce((sum, tx) => sum + tx.amount, 0)}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlockList;