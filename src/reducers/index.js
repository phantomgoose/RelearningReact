import { combineReducers } from 'redux';
import message from './message';
import * as userActions from './users';

export default combineReducers({
  message,
  users: userActions.users,
  isFetching: userActions.isFetching,
});