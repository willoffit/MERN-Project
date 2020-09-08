import React from "react";
import { withRouter } from "react-router-dom";
import './form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user)
        .then(() => this.props.history.push('/'))
        .then(() => this.props.closeModal())
  }

  // Render the session errors if there are any
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
    this.props
      .login({
        email: "Kev@kevvykev.com",
        password: "0123456789",
      })
      .then(() => this.props.history.push("/"))
      .then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className="form-container">
        <h1 className="form-header">LOGIN TO PLAY</h1>
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
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </div>
            <br />
            <div className="btn-container">
              <input
                className="form-submit-btn"
                type="submit"
                value="SUBMIT" />
              <button 
                onClick={this.handleDemoUser}
                className="form-submit-btn">
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

export default withRouter(LoginForm);
