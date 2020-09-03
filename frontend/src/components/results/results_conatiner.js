import { connect } from 'react-redux';
import Results from './results';
import { fetchUsers } from '../../actions/user_actions';
import { fetchGroup } from '../../actions/group_actions'

const mSTP = (state, ownProps) => ({
   group: state.entities.group[ownProps.match.params.groupId],
   currentUser: state.session.id
});

const mDTP = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
   fetchGroup: groupId => dispatch(fetchGroup(groupId))
});

export default connect(mSTP, mDTP)(Results);
