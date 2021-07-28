import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar'
import ExplorerLanding from './views/explorer/ExplorerLanding';
import Homepage from './views/homepage/Homepage';
import BuyMenu from './components/BuyMenu';
import { ProvideAuth } from './contexts/AuthContext';

const Routers = () => {
  return (
    <ProvideAuth>
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/explorer"
            component={ExplorerLanding}
            exact
          />
          <Route
            path="/"
            component={Homepage}
            exact
          />
        </Switch>
        <BuyMenu />
      </Router>
    </ProvideAuth>
  );
}

export default Routers;
