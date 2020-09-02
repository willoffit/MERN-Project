import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

import NavBar from "./navbar";

const mSTP = (state) => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: open_modal => dispatch(openModal(open_modal))
})

export default connect(mSTP, mDTP)(NavBar);
