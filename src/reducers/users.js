import { ACTION_TYPES } from '../actions';

export const users = (state = [], action) => {
  switch(action.type) {
    case(ACTION_TYPES.FETCH_USERS_SUCCESS):
      return action.payload;
    default:
      return state;
  }
};

export const isFetching = (state = false, action) => {
  switch(action.type) {
    case(ACTION_TYPES.FETCH_USERS_BEGIN):
      return true;
    case(ACTION_TYPES.FETCH_USERS_SUCCESS):
      return false;
    default:
      return state;
  }
}