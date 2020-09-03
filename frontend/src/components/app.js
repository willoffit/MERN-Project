import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute, PostSetupRoute } from '../util/route_util'
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from "./profile/profile_container";
import GroupFormContainer from "./groups/groups_container";
import Modal from "./modal/modal_container";
import QuestionsContainer from './questions/questions_container';
import CategoryIndexContainer from "./categories/category_index_container";

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/group" component={GroupFormContainer} /> 
      <PostSetupRoute exact path="/question" component={QuestionsContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
