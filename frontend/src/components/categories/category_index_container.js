import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchQuestions } from '../../actions/question_actions';
import { createGame } from '../../actions/game_actions';
import { updateGroup } from '../../actions/group_actions';
import { editUser } from '../../actions/user_actions';

const mSTP = state => ({
   categories: ["General Knowledge", "Sports", "Film", "Science", "Geography"],
   group: state.entities.groups[state.entities.users[state.session.user.id].group],
   users: state.entities.users
});

const mDTP = dispatch => ({
   fetchQuestions: category => dispatch(fetchQuestions(category)),
   createGame: game => dispatch(createGame(game)),
   updateGroup: group => dispatch(updateGroup(group)),
   updateUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(CategoryIndex);
