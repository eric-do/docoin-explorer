import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import BlockList from './components/BlockList'
import { blockchain } from './dummy';
import { timeDifference } from './utils';

const App = () => {

  const blockData = blockchain.chain.map(block => ({
    key: block.merkle_root,
    fields: [
      block.index,
      timeDifference(block.timestamp * 1000, 'en'),
      block.transactions[0].recipient,
      block.transactions.reduce((sum, tx) => sum + tx.amount, 0)
    ]})
  )

  return (
    <div className="App">
      <NavBar />
      <BlockList
        title="Latest Blocks"
        description="The most recently mined blocks"
        headers={[ 'Height', 'Age', 'Miner', 'Volume']}
        data={blockData}
      />
    </div>
  );
}

export default App;
