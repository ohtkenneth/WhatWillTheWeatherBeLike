import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Components/rootReducer';

import App from './Components/App';
import AppRouter from './Components/Router/index';
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

render (
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);