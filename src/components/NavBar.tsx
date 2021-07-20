import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <h3 className="title is-3">Docoin Explorer</h3>
        </a>
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