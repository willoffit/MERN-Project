import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const PostSetup = ({ component: Component, postSetup, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      postSetup ? (
        <Component {...props} />
      ) : (
        <Redirect to="/category" />
      )
    }
  />
);

const PreSetup = ({ component: Component, preSetup, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !preSetup ? (
        <Component {...props} />
      ) : (
          <Redirect to="/group" />
        )
    }
  />
);

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  postSetup: state.entities.questions.length > 0,
  preSetup: Object.values(state.entities.groups).length === 0,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const PostSetupRoute = withRouter(connect(mapStateToProps)(PostSetup))

export const PreSetupRoute = withRouter(connect(mapStateToProps)(PreSetup))
