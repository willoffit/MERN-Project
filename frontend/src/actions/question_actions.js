import * as QuestionAPIUtil from '../util/questions_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const removeQuestions = () => ({
    type: REMOVE_QUESTION
})

export const fetchQuestions = () => dispatch => (
    QuestionAPIUtil.fetchQuestions()
        .then(questions => dispatch(receiveQuestions()))
        .catch(err => console.log(err))
)

export const fetchQuestion = questionId => dispatch => (
    QuestionAPIUtil.fetchQuestion(groupId)
        .then(question => dispatch(receiveQuestion()))
        .catch(err => console.log(err))
)

// export const fetchQuestions = questionId => dispatch => (
//     QuestionAPIUtil.deleteQuestion(groupId)
//         .then(() => dispatch(removeQuestion(questionId)))
//         .catch(err => console.log(err))
// )