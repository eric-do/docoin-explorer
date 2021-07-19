import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import BlockList from './components/BlockList'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BlockList />
    </div>
  );
}

export default App;
