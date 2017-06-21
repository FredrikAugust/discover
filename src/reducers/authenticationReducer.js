let authenticationReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SIGN_IN':
    return {
      ...state,
      token: 'TODO: insert real token',
      id: 0,
      email: action.username,
      firstName: action.firstName,
      lastName: action.lastName
    };
  case 'SIGN_OUT':
    return {
      token: '',
      id: null,
      email: '',
      firstName: '',
      lastName: ''
    };
  default:
    return state;
  }
};

export default authenticationReducer;
