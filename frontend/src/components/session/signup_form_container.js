import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
