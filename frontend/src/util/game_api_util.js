import axios from 'axios';

export const fetchGames = () => {
    return axios.get('/api/games')
};

export const fetchGame = gameId => {
    return axios.get(`/api/games/${gameId}`)
};

export const createGame = game => {
    return axios.post(`/api/games/`, game)
};

export const updateGame = game => {
    return axios.patch(`/api/games/${game.id}`, game)
};

export const deleteGame = gameId => {
    return axios.delete(`/api/games/${gameId}`)
};