import { RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_USERS:
      for (let i = 0; i < action.users.length; i++) {
        let user = action.users[i];
        nextState[user._id] = user
      }

      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;
