import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buttonChange } from './subMessageSlice';
//for redux
// import { connect } from 'react-redux';

//using redux, set the store in index.js using store = createStore(reducer)

function SubMessage() {
  const message = useSelector((state) => state.subMessage.message);
  const dispatch = useDispatch();

  let styles = {
    fontStyle: 'italic',
    color: 'purple',
  };

  return (
    <div className="App">
      <h3 style={styles}>{message}</h3>
      <button onClick={() => dispatch(buttonChange())}>Subscribe</button>
    </div>
  );
}

// const mapSateToProps = (state) => {
//   return {
//     message: state.message,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buttonChange: () => {
//       dispatch({ type: 'MESSAGE CHANGE' });
//     },
//   };
// };

export default SubMessage;

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
