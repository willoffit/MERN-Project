import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from "./profile/profile_container";
import QuestionsContainer from './questions/questions_container';
import Modal from "./modal/modal_container";
import CategoryIndexContainer from "./categories/category_index_container";

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/question" component={QuestionsContainer} />
      <Route exact path="/categories" component={CategoryIndexContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
