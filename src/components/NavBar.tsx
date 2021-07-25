import React from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const NavSection = Styled.div`
  padding-top: 0;
  padding-bottom: 0;
`

const StyledBrandLink = Styled.div`
  padding-left: 0;
`;

const NavBar = () => {
  const [showMenu, setMenu] = React.useState<boolean>(false);

  return (
    <NavSection className="section">
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link to="/">
          <StyledBrandLink className="navbar-item">
            <h1 className="title is-3">Docoin.com</h1>
          </StyledBrandLink>
        </Link>
        <button
          onClick={() => setMenu(!showMenu)}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu has-text-left ${showMenu && 'is-active'}`}>
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

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">
                <strong>Buy Docoin</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </NavSection>
  )
}

export default NavBar