import { connect } from "react-redux";
import GroupForm from "./groups";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // login: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
