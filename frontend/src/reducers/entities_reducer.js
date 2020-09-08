import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import questionsReducer from './questions_reducer';
import gamesReducer from './game_reducer';

const entitiesReducer = combineReducers({
   users: usersReducer,
   groups: groupsReducer,
   questions: questionsReducer,
   games: gamesReducer
})

export default entitiesReducer;
