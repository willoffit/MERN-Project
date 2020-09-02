import axios from 'axios';

export const fetchQuestions = () => {
    return axios.get('/api/questions')
};

export const fetchQuestion = questionId => {
    return axios.get(`/api/questions/${questionId}`)
};

export const deleteQuestion = questionId => {
    return axios.delete(`/api/questions/${questionId}`)
};
