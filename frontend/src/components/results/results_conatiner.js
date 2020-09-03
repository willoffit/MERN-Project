import { connect } from 'react-redux';
import Results from './results';
import { fetchUsers } from '../../actions/user_actions';
import { fetchGroup } from '../../actions/group_actions'

const mSTP = state => ({

});

const mDTP = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
   fetchGroup: groupId => dispatch(fetchGroup(groupId))
});

export default connect(mSTP, mDTP)(Results);
