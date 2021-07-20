import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DashboardSection from './components/DashboardSection';
import Table from './components/Table'
import { blockchain, current_transactions } from './dummy';
import { getBlockTableData, getTransactionTableData } from './utils';

const App = () => {
  const EXCHANGE_RATE = .10;
  const blockData = getBlockTableData(blockchain);
  const txData = getTransactionTableData(current_transactions, EXCHANGE_RATE);

  return (
    <div className="App">
      <NavBar />
      <DashboardSection
        title="Latest Blocks"
        description="The most recently mined blocks"
      >
        <Table
          headers={[ 'Height', 'Age', 'Miner', 'Volume']}
          data={blockData}
        />
      </DashboardSection>
      <DashboardSection
        title="Latest Transactions"
        description="The most recently published unconfirmed transactions"
      >
        <Table
          headers={['Hash', 'Time', 'Amount (Docoins)', 'Amount (USD)']}
          data={txData}
        />
      </DashboardSection>
    </div>
  );
}

export default App;
