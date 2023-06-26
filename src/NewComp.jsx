import React from 'react';
import { connect } from 'react-redux';
//for redux
// import { connect } from 'react-redux';

//using redux, set the store in index.js using store = createStore(reducer)

function NewComp(props) {
  let styles = {
    fontStyle: 'italic',
    color: 'purple',
  };

  return (
    <div className="App">
      <h3 style={styles}>{props.message}</h3>
      <button onClick={props.buttonChange}>Subscribe</button>
    </div>
  );
}

const mapSateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonChange: () => {
      dispatch({ type: 'MESSAGE CHANGE' });
    },
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(NewComp);

//USING VANILLA REACT WITHOUT REDUX REDUCERS AND STORES

// function NewComp() {
//   const [message, setMessage] = useState('Subscribe to Agileconsult');
//   let styles = {
//     fontStyle: 'italic',
//     color: 'purple',
//   };

//   const buttonChange = () => {
//     setMessage('Thank you for subscribing');
//   };

//   return (
//     <div className="App">
//       <h3 style={styles}>{message}</h3>
//       <button onClick={buttonChange}>Subscribe</button>
//     </div>
//   );
// }

// export default NewComp;
