import { connect } from "react-redux";
import GroupForm from "./groups";
import { fetchUsers } from "../../actions/user_actions";
import { editUser } from "../../actions/user_actions";
import { createGroup } from "../../actions/group_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        users: state.entities.users,
        currentUserId: state.session.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: (user) => dispatch(editUser(user)),
        createGroup: (group) => dispatch(createGroup(group)),
        openModal: open_modal => dispatch(openModal(open_modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
