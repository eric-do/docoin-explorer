import React from 'react'
import Dashboard from './DashBoard'

const ExplorerLanding = () => {

  return (
    <>
      <div className="section">
        <h1 className="title has-text-left is-2">Docoin</h1>
        <h2 className="subtitle has-text-left is-5">
            Docoin information for Docoin (DCN) including
            historical prices, the most recently mined blocks,
            the mempool size of unconfirmed transactions, and
            data for the latest transactions.
        </h2>
      </div>
      <Dashboard />
    </>
  )
};

export default ExplorerLanding;