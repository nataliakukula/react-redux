import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchIncreseAge} from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// Async middleware ??
// const logAction = store => {
//     return next => {
//         return action => {
//             const result = next(action);
//             console.log("Caught in the middleware: ", result)
//             return result;
//         } 
//     }
// }

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));

//have to run it after the store is mounted
sagaMiddleware.run(watchIncreseAge);

// store.subscribe(() => {
//     console.log("State change: ", store.getState())
// });

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
