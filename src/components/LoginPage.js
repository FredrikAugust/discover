import React from 'react';

import LoginForm from 'grommet/components/LoginForm';

import Box from 'grommet/components/Box';

import LinkAnchor from './LinkAnchor';

import { connect } from 'react-redux';

import { signIn } from '../actions/authenticationActions';

import { Redirect } from 'react-router-dom';

const LoginPage = ({ loggedIn, onLoginFormSubmit }) => (
  <Box align='center' justify='center'>
    { loggedIn ? <Redirect to='/' /> : null }
    <LoginForm onSubmit={onLoginFormSubmit} forgotPassword={
        <div>
          <LinkAnchor to='/signup'>Don't have an account? Sign up</LinkAnchor><br/>
          <LinkAnchor to='/forgotpassword'>Forgot password?</LinkAnchor>
        </div>
    } rememberMe={true} />
  </Box>
);

export default connect(
  // As we don't need a mapStateToProps now
  (state) => ({ loggedIn: !!state.currentUser.token }),
  dispatch => ({
    onLoginFormSubmit: credentials => {
      dispatch(signIn(credentials));
    }
  })
)(LoginPage);
