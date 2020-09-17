import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchGames } from '../../actions/game_actions';
// import { createGame } from '../../actions/game_actions';


const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    // user: state.entities.users[state.session.user.id],
    user: { 
        date: "2020-09-04T04:36:16.626Z",
        email: "Kev@kevvykev.com",
        group: "5f54547d1231f2179b53b90b",
        password: "$2a$10$nNRRn6RroVZC3UXhzaE.2uJeNl.5LhvYL2Wocf6iPFvnw310RovLq",
        scores: {
            "Film": [-300, 1240],
            "General Knowledge": [1000, 1800],
            "Geography": [3, -300],
            "History": [40, 2500],
            "Sports": [11, 1200]
        },
        username: "kev",
        _id: "5f51c4403e05452d6745ca70"
    },
    groups: state.entities.groups,
    games: state.entities.games,
    // game: state.entities.games[state.entities.groups[state.entities.users[state.session.user.id].group].game]
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()), 
    fetchGroups: () => dispatch(fetchGroups()),
    fetchGames: () => dispatch(fetchGames())
    // fetchGame: game => dispatch(fetchGame(game))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
