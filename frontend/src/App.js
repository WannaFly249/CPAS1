import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Home from "./pages/home";
import Member from "./pages/member";
import axiosInterceptor from './services/interceptor.js';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        localStorage.getItem("auth_token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      )}
    />
  );
};

const App = () => {
  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="panel">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Home
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  {
                    !localStorage.getItem('auth_token') ? (
                      <React.Fragment>
                        <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>
                          Sign up
                        </Link>
                      </li>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/member"}>
                            Member
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" onClick={logout}>
                            logout
                          </Link>
                        </li>
                      </React.Fragment>
                    )
                  }
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <ProtectedRoute path="/home" component={Home} />
              <ProtectedRoute path="/member" component={Member} />
              <ProtectedRoute exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
