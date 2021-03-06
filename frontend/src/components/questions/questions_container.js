import Question from './questions';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import { editUser } from '../../actions/user_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  questions: state.entities.questions,
  users: state.entities.users,
  user: state.entities.users[state.session.user.id],
  group: state.entities.groups[state.entities.users[state.session.user.id].group],
  games: state.entities.games
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
    editUser: user => dispatch(editUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);