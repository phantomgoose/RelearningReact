const test = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  };
};

export default test;