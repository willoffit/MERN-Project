import * as GameAPIUtil from '../util/game_api_util';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const REMOVE_GAME = 'REMOVE_GAMES';

export const receiveGames = games => ({
    type: RECEIVE_GAMES,
    games
})

export const receiveGame = game => ({
    type: RECEIVE_GAME,
    game
});

export const removeGame = gameId => ({
    type: REMOVE_GAME,
    gameId
});

export const fetchGames = () => dispatch => {
    return GameAPIUtil.fetchGames()
        .then(games => dispatch(receiveGames(games)))
        .catch(err => console.log(err))
};

export const fetchGame = gameId => dispatch => {
    return GameAPIUtil.fetchGame(gameId)
        .then(game => dispatch(receiveGame(game)))
};

export const createGame = game => dispatch => {
    return GameAPIUtil.createGame(game)
        .then(game => dispatch(receiveGame(game.data)))
};

export const deleteGame = gameId => dispatch => {
    return GameAPIUtil.deleteGame(gameId)
        .then(game => dispatch(removeGame(game)))
};
