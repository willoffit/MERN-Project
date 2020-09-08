import axios from 'axios';

// export const fetchGame = () => {
//     return axios.get('/api/groups')
// };

export const fetchGame = gameId => {
    return axios.get(`/api/games/${gameId}`)
};

export const createGame = game => {
    return axios.post(`/api/games/`, game)
};

export const updateGroup = game => {
    return axios.patch(`/api/games/${game.id}`, game)
};

export const deleteGame = gameId => {
    return axios.delete(`/api/games/${gameId}`)
};