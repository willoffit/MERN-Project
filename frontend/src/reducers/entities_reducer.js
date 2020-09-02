import { combineReducers } from 'redux';
import groupsReducer from './groups_reducer';
import questionsReducer from './questions_reducer';

const entitiesReducer = combineReducers({
   groups: groupsReducer,
   questions: questionsReducer
})

export default entitiesReducer;
