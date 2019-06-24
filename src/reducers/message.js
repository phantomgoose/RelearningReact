import { ACTION_TYPES } from '../actions';

const message = (state = '', action) => {
  switch (action.type) {
    case ACTION_TYPES.TEST_ACTION:
      return action.payload;
    default:
      return state;
  };
};

export default message;