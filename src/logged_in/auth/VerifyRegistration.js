import React, { useState, Fragment, useEffect } from "react";
import { useParams } from "react-router";
import { Redirect, Router } from "react-router";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./logincomponent.css";
//import LoginComponentcopy from "./LoginComponentcopy";

function VerifyRegistration() {
  const { id } = useParams();
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorVerify, setErrorVerify] = useState(false);

  const fetchVerify = async () => {
    const dataReq = { id };
    const res = await axios
      .post("http://localhost:8000/api/verifyregistration", dataReq)
      .then(async function (res) {
        await console.log("res.data.uR", res);
        await setVerify(true);
        await setLoading(false);
      })
      .catch(async (err) => {
        await setErrorVerify(true);
        await setLoading(false);
        console.log(err);
        //setAlert("Problem! Not possible to create new article now.", "danger");
      });
  };

  useEffect(() => {
    if (id) {
      fetchVerify();
    }
  }, [id]);
  console.log(loading);
  /////////////////////////////////////

  //////////////////
  return loading ? (
    <div className={!loading ? "overlayRegisterOn" : "overlayRegisterOff"}>
      <div class="lds-dual-ring"></div>
      <div id="textlogin">Loading</div>
    </div>
  ) : (
    <Fragment>
      <div>
        <div>
          {verify ? (
            <div>
              <div className="alert alert-success containerlogin">
                <strong>Verification successful!</strong>
                <br></br>
                Feel free to login now.
              </div>
              <Login />
            </div>
          ) : (
            ""
          )}
          {/* 
          ERROR 
          */}

          {errorVerify ? (
            <div>
              <div className="alert alert-danger containerlogin">
                <strong>Verification failed!</strong>
                <br></br>
                You cannot login!
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(VerifyRegistration);
