import Question from './questions';

import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';


// class Game extends React.Component {
//     componentDidMount() {
//         this.props.fetchQuestions("General");
//     }

//     render() {
//         return 
//     }
// }


const mapStateToProps = (state, ownProps) => ({
    questions: state.entities.questions
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);
