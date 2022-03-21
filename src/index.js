// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + action.payload;
    } else if (action.type === 'DECREMENT') {
        return state - action.payload;
    }

};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('current state', store.getState());
});


store.dispatch({
    type: 'INCREMENT',
    payload: 1
});

store.dispatch({
    type: 'INCREMENT',
    payload: 5
});

store.dispatch({
    type: 'DECREMENT',
    payload: 2
});

// store state:-
// getState() — which allows access to the state object
// dispatch(action) — which allows state to be updated
// subscribe(listener) — which registers listeners, allowing code to trigger every time a change takes place