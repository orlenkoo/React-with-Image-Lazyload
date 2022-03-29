import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// import Login from "../login/auth/styles";
import { Login } from "../../logged_out/auth/login/Login";

// import NavBarHorizontal from "../../shared/components/NavBarHorizontal";
// import FooterOne from "../../components/Footer/FooterOne/Footer";

const LoginPage = () => (
  <Fragment>
    <Helmet>
      <title>Login ECOURBANHUB Account</title>
      <meta name="keywords" content="Login"></meta>
      <meta
        name="description"
        content="Log in to your account on ECOURBANHUB to get access to our services."
      />
    </Helmet>
    {/* <NavBarHorizontal /> */}

    <div className="container-fluid sf">
      <div className="container">
        <Login />
      </div>
    </div>

    {/* <FooterOne /> */}
  </Fragment>
);

export default { component: LoginPage };
