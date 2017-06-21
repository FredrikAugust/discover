const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const REGISTER = 'REGISTER';

export function signIn({ email, password }) {
  return {
    type: SIGN_IN,
    email,
    password
  };
}

export function logOut() {
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
