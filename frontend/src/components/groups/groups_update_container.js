import { connect } from "react-redux";
import GroupUpdate from "./groups_update";
import { fetchUsers, editUser } from "../../actions/user_actions";
import { createGroup, fetchGroup } from "../../actions/group_actions";

const mapStateToProps = (state, ownProps) => {
   return {
      errors: state.errors.session,
      users: state.entities.users,
      groups: state.entities.groups,
      currentUser: state.session.user,
      group: {_id: 1, members: ["Kevin"]}
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchUsers: () => dispatch(fetchUsers()),
      updateUser: (user) => dispatch(editUser(user)),
      createGroup: (group) => dispatch(createGroup(group)),
      fetchGroup: (groupId) => dispatch(fetchGroup(groupId))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupUpdate);
