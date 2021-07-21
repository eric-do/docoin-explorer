import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import ExplorerLanding from './views/explorer/ExplorerLanding';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/"
            component={ExplorerLanding}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
