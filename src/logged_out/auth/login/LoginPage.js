import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { Login } from "./Login";
import { GlobalStyles } from "../../../styles/globalStyles";
import { GlobalFonts } from "../../../styles/fonts/fonts";
import Nav from "../../../shared/components/nav";
// import FooterOne from "../../components/Footer/FooterOne/Footer";

const LoginPage = () => (
  <Fragment>
    <GlobalStyles />
    <GlobalFonts />
    <Helmet>
      <title>Login ECOURBANHUB Account</title>
      <meta name="keywords" content="Login"></meta>
      <meta
        name="description"
        content="Log in to your account on ECOURBANHUB to get access to our services."
      />
    </Helmet>
    <Nav />

    <div className="container-fluid sf">
      <div className="container">
        <Login />
      </div>
    </div>

    {/* <FooterOne /> */}
  </Fragment>
);

export default { component: LoginPage };
