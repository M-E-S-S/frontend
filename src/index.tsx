import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Service workers
import * as serviceWorker from './serviceWorker';

// App
import App from './App';

// Store
import store from './_store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
