import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import discover from './reducers';
import Root from './components/Root';

let store = createStore(discover);

render(
  <Root store={store} />,
  document.getElementById('root')
);
