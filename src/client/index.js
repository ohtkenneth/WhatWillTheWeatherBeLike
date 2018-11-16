import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Components/rootReducer';

import App from './Components/App';
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// ReactDOM.render(<App />, document.getElementById('root'));
render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);