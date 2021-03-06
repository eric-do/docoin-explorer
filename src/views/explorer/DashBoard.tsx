import React from 'react';
import DashboardSection from './DashboardSection';
import { getBlockTableData, getTransactionTableData } from '../../utils';
import Table from './Table';
import { blockchain, current_transactions } from '../../dummy';

const Dashboard = () => {
  const EXCHANGE_RATE = .10;
  const blockData = getBlockTableData(blockchain);
  const txData = getTransactionTableData(current_transactions, EXCHANGE_RATE);

  return (
    <div className="section">
    <div className="columns is-desktop" >
      <DashboardSection
        title="Latest Blocks"
        description="The most recently mined blocks"
        button={{text: 'View All Blocks', url: '/btc/blocks?page=1'}}
      >
        <Table
          headers={[ 'Height', 'Age', 'Miner', 'Volume']}
          data={blockData}
          linkedColumns={{
            0: '/dcn/block/',
            2: '/dcn/address/'
          }}
        />
      </DashboardSection>
      <DashboardSection
        title="Latest Transactions"
        description="The most recently published unconfirmed transactions"
        button={{text: 'View All Transactions', url: '/btc/unconfirmed-transactions?page=1'}}
      >
        <Table
          headers={['Hash', 'Time', 'Amount (DCN)', 'Amount (USD)']}
          data={txData}
          linkedColumns={{
            0: '/dcn/tx/'
          }}
        />
      </DashboardSection>
    </div>
    </div>
  )
}

export default Dashboard;