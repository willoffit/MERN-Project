import { RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return oldState;
  }
};

export default usersReducer;
