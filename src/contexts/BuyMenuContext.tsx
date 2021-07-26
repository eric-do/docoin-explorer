import React from 'react';

interface BuyMenuContextInterface {
  displayMenu: boolean;
  setDisplayMenu: (display: boolean) => void;
}

const BuyMenuContext = React.createContext<BuyMenuContextInterface>({
  displayMenu: false,
  setDisplayMenu: () => {}
});

export default BuyMenuContext;