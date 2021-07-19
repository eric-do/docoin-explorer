import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
