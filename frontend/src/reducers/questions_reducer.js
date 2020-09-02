import { 
    RECEIVE_QUESTIONS, 
    // RECEIVE_QUESTION, 
    REMOVE_QUESTIONS 
} from '../actions/question_actions';

const questionsReducer = (oldState=[], action) => {
    Object.freeze(oldState);
    Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions.results;
        // case RECEIVE_QUESTION:
        //     return 
        case REMOVE_QUESTIONS:
            return [];
        default:
            return oldState;
    }
};

export default questionsReducer;
