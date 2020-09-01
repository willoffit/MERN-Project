import { connect } from 'react-redux';
import Profile from './profile'


const mapStateToProps = (state, ownProps) => ({
    // user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    // fetchUsers: () => dispatch(fetchUsers()),
    // fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);