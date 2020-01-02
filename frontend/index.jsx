import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './redux/store';
import 'normalize.css';

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
