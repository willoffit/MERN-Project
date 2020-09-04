import { connect } from "react-redux";
import GroupForm from "./groups";
import { fetchUsers } from "../../actions/user_actions";
import { updateUser } from "../../actions/user_actions";
import { createGroup } from "../../actions/group_actions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        users: state.entities.users 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: (user) => dispatch(updateUser(user)),
        createGroup: (group) => dispatch(createGroup(group))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
