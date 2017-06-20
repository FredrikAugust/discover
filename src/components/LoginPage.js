import React from 'react';

import LoginForm from 'grommet/components/LoginForm';

import Box from 'grommet/components/Box';

import LinkAnchor from './LinkAnchor';

const LoginPage = () => (
  <Box align='center' justify='center'>
    <LoginForm forgotPassword={
        <div>
          <LinkAnchor to='/signup'>Don't have an account? Sign up</LinkAnchor><br/>
          <LinkAnchor to='/forgotpassword'>Forgot password?</LinkAnchor>
        </div>
    } rememberMe={true} />
  </Box>
);

export default LoginPage;
