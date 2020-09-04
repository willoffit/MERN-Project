import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../modal/modal.css";

class NavBar extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <h1 className="splash-page-header">WILK TRIVIA</h1>
          <button className="logout" onClick={() => this.props.logout()}>Log Out</button>
          <button className="profile-link" onClick={() => this.props.history.push("/profile")}>
            Profile
          </button>

        <div className="splash-page-body">
          <div className="signup-login-buttons">
            <Link
              className="signup-button rotate_right"
              onClick={() => this.props.openModal("signup")}
            >
              <div>Signup</div>
              <i class="far fa-id-badge"></i>
            </Link>
            <Link
              className="login-button rotate_left"
              onClick={() => this.props.openModal("login")}
            >
              <div>Login</div>
              <i class="fas fa-sign-in-alt"></i>
            </Link>
          </div>
        </div>
        <div>
          <footer className="splash-page-footer">
            Copyright &copy; 2020 WILK Trivia
          </footer>
          <div className="splash-page-team">
            <div className="Will">
              <div>Will Offit</div>
              <i class="fab fa-github"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-angellist"></i>
            </div>
            <div className="Isreal">
              <div>Israel Gonzalez</div>
              <i class="fab fa-github"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-angellist"></i>
            </div>
            <div className="Leah">
              <div>Leah de la Pena</div>
              <i class="fab fa-github"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-angellist"></i>
            </div>
            <div className="Kevin">
              <div>Kevin Besenio</div>
              <i class="fab fa-github"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-angellist"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };

};

export default NavBar;
