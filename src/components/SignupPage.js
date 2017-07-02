import React from 'react';

import Box from 'grommet/components/Box';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { register } from '../actions/authenticationActions';

const SignupPage = ({ loggedIn, onSignupSubmit }) => (
  <Box align='center' justify='center'>
    <Form pad='medium' onSubmit={onSignupSubmit}>
      { loggedIn ? <Redirect to='/' /> : null }
      <Box></Box>
      <fieldset>
        <FormField label='Email' htmlFor='email'>
          <TextInput name='email' type='email' id='email' />
        </FormField>
        <FormField label='First name' htmlFor='firstName'>
          <TextInput name='firstName' id='firstName' />
        </FormField>
        <FormField label='Last name' htmlFor='lastName'>
          <TextInput name='lastName' id='lastName' />
        </FormField>
        <FormField label='Password' htmlFor='password'>
          <TextInput name='password' type='password' id='password' />
        </FormField>
      </fieldset>
      <Box direction='row'>
        <Button fill={true} primary={true} type='submit' label='Sign up' />
      </Box>
    </Form>
  </Box>
);

export default connect(
  (state) => ({ loggedIn: !!state.currentUser.token }),
  (dispatch) => ({
    onSignupSubmit: credentials => {
      dispatch(register(credentials));
    }
  })
)(SignupPage);
