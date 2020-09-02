import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from "./profile/profile_container";
import QuestionsContainer from './questions/questions_container';
import Modal from "./modal/modal_container";
import CategoryIndexContainer from "./categories/category_index_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <CategoryIndexContainer />
    <Switch>
<<<<<<< HEAD
=======
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <Route exact path="/question" component={QuestionsContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

>>>>>>> 127efc58fc6f3cf2f7dda166f4b0be5c193a9ea9
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
