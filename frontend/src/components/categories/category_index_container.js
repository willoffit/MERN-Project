import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { fetchQuestions } from '../../actions/question_actions';

const mSTP = state => ({
   categories: ["General", "Sports", "Film", "Science", "Geography"],
   group: state.entities.groups[state.entities.users[state.session.user.id].group],
   users: state.entities.users
});

const mDTP = dispatch => ({
   fetchQuestions: category => dispatch(fetchQuestions(category))
});

export default connect(mSTP, mDTP)(CategoryIndex);
