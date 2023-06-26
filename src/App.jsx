import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import NewComp from './NewComp';
import SubMessage from './components/submessage/SubMessage';

function App() {
  let styles = {
    fontStyle: 'bold',
    color: 'teal',
  };
  return (
    <div className="App">
      <h1 style={styles}>Welcome</h1>
      <SubMessage />
    </div>
  );
}

export default App;
