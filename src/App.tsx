import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DashboardSection from './components/DashboardSection';
import Table from './components/Table'
import { blockchain } from './dummy';
import { getBlockTableData } from './utils';

const App = () => {

  const blockData = getBlockTableData(blockchain);

  return (
    <div className="App">
      <NavBar />
      <DashboardSection
        title="Latest Blocks"
        description="The most recently mined blocks"
      >
        <Table
          headers={[ 'Height', 'Age', 'Miner', 'Volume']}
          data={blockData}
        />
      </DashboardSection>
    </div>
  );
}

export default App;
