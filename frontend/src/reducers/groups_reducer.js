import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';

const groupsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({}, oldState);

   switch(action.type) {
      case RECEIVE_GROUPS:
         return action.groups;
      case RECEIVE_GROUP:
         nextState[action.group._id] = action.group;
         return nextState
      case REMOVE_GROUP:
         delete nextState[action.groupId];
         return nextState;
      default:
         return oldState;
   }
};

export default groupsReducer;
