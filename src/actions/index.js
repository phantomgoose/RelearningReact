export const ACTION_TYPES = {
  TEST_ACTION: 'TEST_ACTION',
  FETCH_USERS_BEGIN: 'FETCH_USERS_BEGIN',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
};

export const test = message => ({
  type: ACTION_TYPES.TEST_ACTION,
  payload: message,
});

export const fetchFakeUsersBegin = () => ({
  type: ACTION_TYPES.FETCH_USERS_BEGIN,
});

export const fetchFakeUsersSuccess = users => ({
  type: ACTION_TYPES.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchFakeUsers = () => dispatch => {
  dispatch(fetchFakeUsersBegin());

  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => dispatch(fetchFakeUsersSuccess(json)));
};