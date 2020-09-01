import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="signup-login-buttons">
          <Link to={"/signup"} className="signup-button">Signup</Link>
          <Link to={"/login"} className="login-button">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="splash-page">
        <h1 className="splash-page-header">WILK TRIVIA</h1>
        <div className="splash-page-body">{this.getLinks()}</div>
        <div>
          <footer className="splash-page-footer">Copyright &copy; 2020 WILK Trivia</footer>
          <div className="splash-page-team">
            <div>Leah de la Pena</div>
            <div>Israel Gonzalez</div>
            <div>Will Offit</div>
            <div>Kevin Besenio</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
