let authenticationReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SIGN_IN':
    return {
      token: 'TODO: insert real token',
      id: 0,
      email: action.username,
      firstName: 'Get from api',
      lastName: 'Get from api'
    };
  case 'SIGN_OUT':
    return {
      token: '',
      id: null,
      email: '',
      firstName: '',
      lastName: ''
    };
  case 'REGISTER':
    return {
      token: 'TODO: insert real token',
      id: 0,
      email: action.username,
      firstName: 'Get from api',
      lastName: 'Get from api'
    };
  default:
    return state;
  }
};

export default authenticationReducer;
