import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import ExplorerLanding from './views/explorer/ExplorerLanding';
import Homepage from './views/homepage/Homepage';
import BuyMenuContext from './contexts/BuyMenuContext';
import BuyMenu from './components/BuyMenu';

const App = () => {
  const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
  const value = { displayMenu, setDisplayMenu }

  return (
    <BuyMenuContext.Provider value={value}>
      <div className="App">
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
        </Router>
      </div>
    </BuyMenuContext.Provider>
  );
}

export default App;
