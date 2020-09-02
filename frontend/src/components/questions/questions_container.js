import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../../actions/question_actions';
import Question from './questions';

const mapStateToProps = (state, ownProps) => ({
    questions: state.entities.questions
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);
