import axios from "axios";
import { GET_TAGS, CLEAR_TAGS, TAGS_ERROR } from "../types";

// GET CURRENT TAGS
export const getCurrentTags = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/article/getallarttag"
    );
    dispatch({
      type: GET_TAGS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: TAGS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
