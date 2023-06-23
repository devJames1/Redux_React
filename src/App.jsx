import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewComp from './NewComp';

function App() {
  let styles = {
    fontStyle: 'bold',
    color: 'teal',
  };
  return (
    <div className="App">
      <h1 style={styles}>Welcome</h1>
      <NewComp />
    </div>
  );
}

export default App;
