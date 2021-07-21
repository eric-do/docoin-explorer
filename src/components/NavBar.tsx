import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-3">Docoin Explorer</h1>
        </Link>
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/wallet" className="navbar-item">
          Wallet
        </Link>
        <Link to="/exchange" className="navbar-item">
          Exchange
        </Link>
        <Link to="/" className="navbar-item">
          Explorer
        </Link>
      </div>
    </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-primary">
              <strong>Buy Docoin</strong>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar