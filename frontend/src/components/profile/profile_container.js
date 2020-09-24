import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchGames, fetchGame } from '../../actions/game_actions';
import { receiveQuestions } from '../../actions/question_actions'
// import { createGame } from '../../actions/game_actions';


const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    user: state.entities.users[state.session.user.id],
    groups: state.entities.groups,
    games: state.entities.games,
    // game: state.entities.games[state.entities.groups[state.entities.users[state.session.user.id].group].game]
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()), 
    fetchGroups: () => dispatch(fetchGroups()),
    fetchGames: () => dispatch(fetchGames()),
    fetchGame: gameId => dispatch(fetchGame(gameId)), 
    receiveQuestions: questions => dispatch(receiveQuestions(questions))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
