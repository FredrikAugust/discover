import React from 'react';

import LoginForm from 'grommet/components/LoginForm';

import Box from 'grommet/components/Box';

import LinkAnchor from './LinkAnchor';

import { connect } from 'react-redux';

import { signIn } from '../actions/authenticationActions';

const LoginPage = ({ onLoginFormSubmit }) => (
  <Box align='center' justify='center'>
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
  () => ({}),
  dispatch => ({
    onLoginFormSubmit: credentials => {
      dispatch(signIn(credentials));
    }
  })
)(LoginPage);
