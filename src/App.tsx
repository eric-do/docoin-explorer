import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import ExplorerLanding from './views/explorer/ExplorerLanding';
import Homepage from './views/homepage/Homepage';

const App = () => {
  return (
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
  );
}

export default App;
