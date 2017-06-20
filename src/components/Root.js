import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FrontPage from './FrontPage';
import Nav from './Nav';
import FooterNav from './FooterNav';

import App from 'grommet/components/App';

const Root = ({ store }) => (
  <App>
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={FrontPage} />
          <FooterNav />
        </div>
      </Router>
    </Provider>
  </App>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
