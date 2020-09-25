import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../modal/modal.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="splash-page">
        <h1 className="splash-page-header">WILK TRIVIA</h1>

        <div className="splash-page-body">
          <div className="signup-login-buttons">
            <Link
              className="signup-button rotate_right"
              onClick={() => this.props.openModal("signup")}
            >
              <div>Signup</div>
              <i className="far fa-id-badge"></i>
            </Link>
            <Link
              className="login-button rotate_left"
              onClick={() => this.props.openModal("login")}
            >
              <div>Login</div>
              <i className="fas fa-sign-in-alt"></i>
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
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-angellist"></i>
            </div>
            <div className="Isreal">
              <div>Israel Gonzalez</div>
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-angellist"></i>
            </div>
            <div className="Leah">
              <div>Leah de la Pena</div>
              <i
                className="fab fa-github"
                onClick={() =>
                  window.location.href = "https://github.com/leahdlp"
                }
              ></i>
              <i
                className="fab fa-linkedin"
                onClick={() =>
                  window.location.href = 
                    "https://www.linkedin.com/in/leahdelapena/"
                  
                }
              ></i>
              <i
                className="fab fa-angellist"
                onClick={() =>
                  window.location.href = "https://angel.co/u/leah-de-la-pena"
                }
              ></i>
            </div>
            <div className="Kevin">
              <div>Kevin Besenio</div>
              <i
                className="fab fa-github"
                onClick={() =>
                  window.location.href = "https://github.com/besenio"
                }
              ></i>
              <i
                className="fab fa-linkedin"
                onClick={() =>
                  window.location.href = 
                    "https://www.linkedin.com/in/kevin-besenio-79905a1b7/"
                    
                }
              ></i>
              <i
                className="fab fa-angellist"
                onClick={() =>
                  window.location.href = "https://angel.co/u/besenio"
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
}


export default NavBar;
