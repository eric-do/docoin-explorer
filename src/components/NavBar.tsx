import React from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import BuyMenuContext from '../contexts/BuyMenuContext';
import { useTracking } from '../hooks';

const NavSection = Styled.div`
  padding-top: 0;
  padding-bottom: 0;
`

const StyledBrandLink = Styled.div`
  padding-left: 0;
`;

const NavBar = () => {
  const [showMenu, setMenu] = React.useState<boolean>(false);
  const [searchInput, setSearchInput] = React.useState<string>('')
  const { displayMenu, setDisplayMenu } = React.useContext(BuyMenuContext);
  const { incrementClicks } = useTracking('navbar-buy-docoin');

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchInput(e.currentTarget.value);
  };

  const handleButtonClick = () => {
    setDisplayMenu(!displayMenu);
    incrementClicks();
  }

  return (
    <NavSection className="section">
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link to="/" aria-label="Homepage link">
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
          <Link to="/explorer" className="navbar-item">
            Explorer
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control has-icons-left">
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
              <input
                aria-label="Search field"
                className="input"
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInput}
              />
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <button
                onClick={handleButtonClick}
                className="button is-primary"
              >
                <strong>Buy Docoin</strong>
              </button>
              <button className="button has-background-info-dark has-text-white">
                <strong>Trade</strong>
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