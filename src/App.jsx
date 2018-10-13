import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import Top from './container/Top';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <Top />
    </Provider>,
    root
  );
}
