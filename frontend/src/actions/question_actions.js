import * as GameplayAPIUtil from '../util/gameplay_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const REMOVE_QUESTIONS = 'REMOVE_QUESTION';

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

export const removeQuestions = () => ({
    type: REMOVE_QUESTIONS
})

export const fetchQuestions = category => dispatch => (
    GameplayAPIUtil.getGame(category)
        .then(trivia => dispatch(receiveQuestions(trivia.data.results)))
        .catch(err => console.log(err))
)
