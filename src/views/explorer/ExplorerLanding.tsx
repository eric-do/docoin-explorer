import React from 'react'
import Dashboard from './DashBoard'
import BuyMenu from '../../components/BuyMenu'

const ExplorerLanding = () => {

  return (
    <>
      <div className="section">
        <h1 className="title has-text-left is-3" aria-label="Explorer page title">
          Docoin
        </h1>
        <h2 className="subtitle has-text-left is-6" aria-label="Explorer page subtitle">
            Docoin information for Docoin (DCN) including
            historical prices, the most recently mined blocks,
            the mempool size of unconfirmed transactions, and
            data for the latest transactions.
        </h2>
      </div>
      <Dashboard />
      <BuyMenu />
    </>
  )
};

export default ExplorerLanding;