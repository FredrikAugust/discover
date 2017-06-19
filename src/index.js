import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import discover from './reducers';
import Root from './components/Root';

import 'grommet/scss/vanilla/index';

let store = createStore(discover);

render(
  <Root store={store} />,
  document.getElementById('root')
);
