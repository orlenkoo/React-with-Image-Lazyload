import axios from "axios";

import { GET_UR, UR_ERROR } from "./types";

// Get current users profile
export const getUR = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/getuRPublic");

    dispatch({
      type: GET_UR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
