import React from 'react';
import './App.css';
import BuyMenuContext from './contexts/BuyMenuContext';
import Routers from './Routers';

const App = () => {
  const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
  const value = { displayMenu, setDisplayMenu }

  return (
    <div className="App">
      <BuyMenuContext.Provider value={value}>
        <Routers />
      </BuyMenuContext.Provider>
    </div>
  );
}

export default App;
