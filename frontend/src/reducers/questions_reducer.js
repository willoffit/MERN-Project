import { 
    RECEIVE_QUESTIONS,  
    REMOVE_QUESTIONS 
} from '../actions/question_actions';

const questionsReducer = (oldState=[], action) => {
    Object.freeze(oldState);
    Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions;
        case REMOVE_QUESTIONS:
            return [];
        default:
            return oldState;
    }
};

export default questionsReducer;
