import React, { useState } from 'react';
//for redux
// import { connect } from 'react-redux';

//USING VANILLA REACT WITHOUT REDUX REDUCERS AND STORES
function NewComp() {
  const [message, setMessage] = useState('Subscribe to Agileconsult');
  let styles = {
    fontStyle: 'italic',
    color: 'purple',
  };

  const buttonChange = () => {
    setMessage('Thank you for subscribing');
  };

  return (
    <div className="App">
      <h3 style={styles}>{message}</h3>
      <button onClick={buttonChange}>Subscribe</button>
    </div>
  );
}

export default NewComp;
