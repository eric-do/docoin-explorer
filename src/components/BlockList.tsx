import React from 'react'
import { BlockChain, Transaction } from '../types';

const headers = [
  'Height',
  'Age',
  'Miner',
  'Volume'
]

interface Props {
  title: string;
  description: string;
  headers: string[];
  data: Data[]
};

interface Data {
  key: string | number;
  fields: (string | number)[];
};

const BlockList = ({headers = [], data = [] as Data[]}: Props) => {
  return (
    <div className="section">
      <div className="block">
        <h4 className="title is-4">Latest Blocks</h4>
          <div className="table-container">
            <table className="table is-fullwidth">
              <thead>
                <tr>{ headers.map(h => <th key={h}>{h}</th>) }</tr>
              </thead>
              <tbody>
                {
                  data.map(row => {
                    return (
                      <tr key={row.key}>
                        { row.fields.map((field, i) => <td key={i}>{field}</td>)}
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}

export default BlockList;