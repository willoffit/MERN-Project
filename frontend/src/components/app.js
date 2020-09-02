import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
// import MainPage from "./main/main_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import Modal from "./modal/modal_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
