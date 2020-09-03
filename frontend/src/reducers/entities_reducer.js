import { combineReducers } from 'redux';
import groupsReducer from './groups_reducer';

const entitiesReducer = combineReducers({
   groups: groupsReducer
})

export default entitiesReducer;
