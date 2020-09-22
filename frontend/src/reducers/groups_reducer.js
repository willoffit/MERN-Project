import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';

const groupsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({}, oldState);

   switch(action.type) {
      case RECEIVE_GROUPS:
         nextState = {};

         for(let i = 0; i < action.groups.length; i++) {
            let group = action.groups[i];
            nextState[group._id] = group;
         }

         return nextState;
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
