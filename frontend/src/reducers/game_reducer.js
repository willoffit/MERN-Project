import { RECEIVE_GAMES, RECEIVE_GAME, REMOVE_GAME } from '../actions/game_actions';

const gamesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_GAMES:
         nextState = {};

         for(let i = 0; i < action.games.length; i++) {
            let game = action.games[i];
            nextState[game._id] = game;
         }

         return nextState;
        case RECEIVE_GAME:
            nextState[action.game._id] = action.game;
            return nextState
        case REMOVE_GAME:
            delete nextState[action.gameId];
            return nextState;
        default:
            return oldState;
    }
};

export default gamesReducer;
