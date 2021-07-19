import React from 'react'
import { BlockChain, Transaction } from '../types';
import { timeDifference } from '../utils';
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
        <h4 className="title is-4">Latest Blocks</h4>
        <div className="box">
          <div className="table-container">
            <table className="table is-fullwidth">
              <thead>
                <tr>{ headers.map(h => <th key={h}>{h}</th>) }</tr>
              </thead>
              <tbody>
                {
                  blockchain.chain.map(block => (
                    <tr key={block.merkle_root}>
                      <td>{block.index}</td>
                      <td>{timeDifference(block.timestamp * 1000, 'en')}</td>
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
    </div>
  );
}

export default BlockList;