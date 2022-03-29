import React, { Component } from "react";
import { authenticate } from "../../../components/auth/auth";
import { Redirect, Router } from "react-router";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./logincomponent.css";
import Login from "./Login";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "registration",
      newPasswordConfirm: "registration",
      error: null,
      user: null,
      loading: null,
      message: null,
      success: null,
      showForm: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //grab the value (ame="") of the entered value
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    const ids = this.props.match.params.id;
    //console.log(ids);
  }

  handleSubmit(event) {
    event.preventDefault();
    {
      this.setState({
        loading: true,
        error: null,
        message: null,
      });
    }
    axios
      .patch("http://localhost:8000/api/resetPassword", {
        newPassword: this.state.newPassword,
        newPasswordConfirm: this.state.newPasswordConfirm,
        passwordResetToken: this.props.match.params.id,
      })

      .then((response) => {
        this.setState({
          message: response.data.message,
          error: null,
          loading: null,
          success: true,
        });

        // .then((response) => {
        //   console.log(props.location.params.id);
        // })
        // authenticate(data, () => {
        //   Router.push("/");
        // });
      })

      .catch((error) =>
        this.setState({
          error: error.response.data.error,
          message: error.response.data.message,
          loading: null,
        })
      );

    // );
    // .catch((error) => {
    //   console.log(error.response.data.message);
    // });

    // .then(response => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(`${this.state.newPassword}`);
    // });

    // console.log(
    //   this.state.success,
    //   `${this.state.password}`,
    //   `${this.state.passwordConfirm}`
    // );
  }

  render() {
    return (
      <div>
        <div>
          {this.state.success ? (
            <div>
              <div className="alert alert-success containerlogin">
                <strong>Password update successful!</strong>
                <br></br>
                Feel free to login now.
              </div>{" "}
              <Login />{" "}
            </div>
          ) : (
            ""
          )}
          {/* {this.state.success === true ? <Redirect to="/login" /> : ""} */}
        </div>
        <div
          className={
            this.state.success === true
              ? "resetcontainerSwitchOff"
              : "resetcontainerSwitchOn"
          }>
          <div className="containerlogin">
            <h1>Reset Password</h1>
            <div
              className={
                this.state.loading === true
                  ? "overlayRegisterOn"
                  : "overlayRegisterOff"
              }>
              <div class="lds-dual-ring"></div>
              <div id="textlogin">Loading</div>
            </div>
            <div>
              {this.state.loading === true ? (
                <div className="alert alert-status">Loading...</div>
              ) : (
                ""
              )}
            </div>
            {/****
           ****
          ---------- ERROR MESSAGE if failed reset ---------------
          ****
          ****/}
            <div>
              {this.state.error !== null ? (
                <div className="alert alert-danger">
                  <strong>Password reset failed!</strong>
                  <br></br>
                  {this.state.message}{" "}
                </div>
              ) : (
                ""
              )}
            </div>
            {/* *********************** FORM *********************** */}
            <form className="containerloginforms" onSubmit={this.handleSubmit}>
              <label className="mb-20" for="newpassword">
                New Password*
              </label>

              <input
                type="password"
                className="form-control"
                name="newPassword"
                placeholder="New Password"
                value={
                  this.state.success === true ? "" : this.state.newPassword
                }
                onChange={this.handleChange}
                required
              />
              <div className="mt-20">
                <label>Confirm New Password*</label>
              </div>
              <input
                type="password"
                className="form-control"
                name="newPasswordConfirm"
                placeholder="Confirm New Password"
                value={
                  this.state.success === true
                    ? ""
                    : this.state.newPasswordConfirm
                }
                onChange={this.handleChange}
                required
              />
              <p className="mb-20 mt-0">
                <a>
                  {" "}
                  <Link to="/forgot-password">Forgot Password?</Link>
                </a>
              </p>

              <button type="submit">Confirm!</button>
              <p className="mt-20 mb-0">
                Don't have an account?
                <a>
                  {" "}
                  <Link to="/registration">Create one here</Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResetPassword);
