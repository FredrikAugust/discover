const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const REGISTER = 'REGISTER';

export function signIn({ username, password, rememberMe }) {
  return {
    type: SIGN_IN,
    username,
    password,
    rememberMe
  };
}

export function signOut() {
  return {
    type: SIGN_OUT
  };
}

export function register({ email, firstName, lastName, password }) {
  return {
    type: REGISTER,
    email,
    firstName,
    lastName,
    password
  };
}
