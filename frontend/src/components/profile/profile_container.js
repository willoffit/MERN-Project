import { connect } from 'react-redux';
import Profile from './profile'
import { fetchUsers } from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    user: state.entities.users[state.session.user.id]
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);