import axios from "axios";

import { GET_PM_AT, ERROR_PM_AT } from "../types";

// Get current users profile
export const getPmAt = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/pm/getarticlepm");

    dispatch({
      type: GET_PM_AT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_PM_AT,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
