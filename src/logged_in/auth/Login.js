import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
// import { setAlert } from "../../redux/actions/alert";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// import { login } from "../../redux/actions/auth";
// import AlertComponent from "../../components/alert/AlertComponent";

//alt

import "./loginComponent.css";
// import LoadingSpinner from "../../components/Spinner/Loading";
const Login = ({ login, isAuthenticated }) => {
  // const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "a@web.de",
    password: "registration",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div>
        <div className="containerlogin">
          <h1>Login</h1>
          {/* <AlertComponent /> */}
          {/* <div>{this.state.success === true ? <Redirect to="/" /> : ""}</div>
        <div
          className={
            this.state.loading === true
              ? "overlayRegisterOn"
              : "overlayRegisterOff"
          }
        >
          <div class="lds-dual-ring"></div>
          <div id="textlogin">Loading</div>
        </div>
        <div>
          {this.state.loading === true ? (
            <div className="alert alert-status">Loading...</div>
          ) : (
            ""
          )}
        </div> */}
          {/****
           ****
          ---------- ERROR MESSAGE if failed login ---------------
          ****
          ****/}
          {/* <div>
          {this.state.error !== null ? (
            <div className="alert alert-danger">
              <strong>Login failed!</strong>
              <br></br>
              Wrong email or password.{" "}
              <a>
                {" "}
                <Link to="/user/forgot-password">Reset your password</Link>
              </a>{" "}
              here or{" "}
              <a>
                {" "}
                <Link to="/registration">create</Link>
              </a>{" "}
              an account.
            </div>
          ) : (
            ""
          )}
        </div> */}
          {/****
           ****
          ---------- SUCCESS MESSAGE if successfully login ---------------
          ****
          ****/}
          {/* <div>
          {this.state.message !== null ? (
            <div className="alert alert-success">
              <strong>Login successful!</strong>
              <br></br>
              You will be redirected to your account.
            </div>
          ) : (
            ""
          )}
        </div> */}
          {/****
          ---------- END SUCCESS MESSAGE if successfully login ---------------
          ****/}
          <form className="containerloginforms" onSubmit={(e) => onSubmit(e)}>
            <label className="mb-20" for="email">
              Email*
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />

            <div className="mt-20">
              <label>Password*</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
              <div className="eye slash">
                <div></div>
                <div></div>
              </div>
            </div>
            <p className="mb-20 mt-0">
              <a>
                {" "}
                <Link to="/forgot-password">Forgot Password?</Link>
              </a>
            </p>
            <button type="submit">Login</button>
            <p className="mt-20 mb-0">
              Don't have an account?
              <a>
                <Link to="/registration">Create one here</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// export default connect(mapStateToProps, { setAlert, login })(Login);
export default Login;
