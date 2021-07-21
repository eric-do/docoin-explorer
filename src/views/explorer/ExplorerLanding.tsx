import React from 'react'
import Dashboard from './DashBoard'

const ExplorerLanding = () => {

  return (
    <>
      <div className="section">
        <h1 className="title has-text-left is-1">Bitcoin</h1>
        <h5 className="subtitle has-text-left is-5">
            Blockchain information for Bitcoin (BTC) including
            historical prices, the most recently mined blocks,
            the mempool size of unconfirmed transactions, and
            data for the latest transactions.
          </h5>
      </div>
      <Dashboard />
    </>
  )
};

export default ExplorerLanding;