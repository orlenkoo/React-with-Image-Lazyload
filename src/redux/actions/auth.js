import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  CLEAR_UR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  // ARICLE CREATION
  CLEAR_CATEGORIES,
  CLEAR_ARTICLE_ID,
  CLEAR_TAGS,
  CLEAR_AUTHOR_LIST,
  CLEAR_ARTICLE_IMAGES,
} from "./types";
import { setAlert } from "./alert";
// import cookie from "js-cookie";

// Load User
export const loadUser = () => async (dispatch) => {
  // const token = cookie.get("token");

  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
  try {
    const res = await axios.get("http://localhost:8000/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register User
export const register =
  ({ email, password, passwordConfirm }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password, passwordConfirm });
    try {
      const res = await axios.post(
        "http://localhost:8000/api/registration",
        body,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const errors = error.response.data.error;
      if (errors) {
        dispatch(setAlert(error.response.data.error, "danger"));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });

      dispatch(loadUser());
    } catch (err) {
      console.log(err.response.data.message);
      const errors = err.response.data.message;
      if (errors) {
        dispatch(setAlert(err.response.data.message, "danger"));
      }

      // catch (error) {
      //   console.log(error);
      //   const errors = error.response.data.error;
      //   if (errors) {
      //     errors.forEach((error) =>
      //       dispatch(setAlert(error.response.data.error, "danger"))
      //     );
      //   }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// LOGOUT / Clear Profile
export const logout = () => (dispatch) => {
  console.log("redux auth");
  delete axios.defaults.headers.common["x-auth-token"];
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  // ARICLE CREATION
  dispatch({ type: CLEAR_CATEGORIES });
  dispatch({ type: CLEAR_TAGS });
  dispatch({ type: CLEAR_ARTICLE_ID });
  dispatch({ type: CLEAR_AUTHOR_LIST });
  dispatch({ type: CLEAR_ARTICLE_IMAGES });
  dispatch({ type: CLEAR_UR });
};
