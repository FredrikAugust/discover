import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import projectReducer from './projectReducer';
import usersReducer from './usersReducer';

const discover = combineReducers({
  currentUser: authenticationReducer,
  projects: projectReducer,
  users: usersReducer
});


export default discover;
