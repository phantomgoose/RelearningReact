import { combineReducers } from 'redux';
import test from './test';
import * as userActions from './users';

export default combineReducers({
  test,
  users: userActions.users,
  isFetching: userActions.isFetching,
});