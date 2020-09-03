import React from "react";
import { withRouter } from "react-router-dom";
import './form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handleDemoUser = this.handleDemoUser.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  handleDemoUser() {
    this.props.login({
      username: 'username1',
      email: 'user@user.com',
      password: '0123456789',
      password2: '0123456789'
    })
  }

  render() {
    return (
      <div className="form-container">
        <h1 className="form-header">SIGN UP TO PLAY</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <br />
            <div className="input-container">
              <input
                className="user-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="user-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input
                className="user-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                className="user-input"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
            </div>
            <br />
            <div className="btn-container">
              <input 
                className="form-submit-btn"
                type="submit" 
                value="SUBMIT" />
              <button 
                className="form-submit-btn"
                onClick={this.handleDemoUser}>
                PLAY AS DEMO USER
              </button>
            </div>
            <br />
            <div className="errors-container">
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
