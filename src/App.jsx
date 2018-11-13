import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Top from './container/Top';
import Main from './container/Main';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Top />
        <Main />
      </div>
    </Provider>,
    root
  );
}
