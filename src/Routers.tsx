import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar'
import ExplorerLanding from './views/explorer/ExplorerLanding';
import Homepage from './views/homepage/Homepage';
import BuyMenu from './components/BuyMenu';

const Routers = () => {
  return (
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
  );
}

export default Routers;
