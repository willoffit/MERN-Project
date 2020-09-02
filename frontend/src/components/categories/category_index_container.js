import { connect } from 'react-redux';
import CategoryIndex from './category_index';
// import { fetchQuestions } from '../../actions/question_actions';

const mSTP = state => ({
   categories: ["General", "Sports", "Film", "Science", "Geograpy"]
});

const mDTP = dispatch => ({
   // fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mSTP, mDTP)(CategoryIndex);
