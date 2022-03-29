import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
import cookie from "js-cookie";

const initialState = {
  token: cookie.get("token"),
  isAuthenticated: null,
  loading: true,
  pm: null,
  ud: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        pm: payload.pm,
        ud: payload.userId,
      };
    case REGISTER_SUCCESS:
      // ??!?!?
      //cookie.set("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_SUCCESS:
      cookie.set("token", payload, { expires: 100.05 });
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      cookie.remove("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
