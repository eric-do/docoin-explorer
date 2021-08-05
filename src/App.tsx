import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import BuyMenuContext from './contexts/BuyMenuContext';
import Routers from './Routers';

const queryClient = new QueryClient()

const App = () => {
  const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);
  const value = { displayMenu, setDisplayMenu }

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BuyMenuContext.Provider value={value}>
          <Routers />
        </BuyMenuContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
