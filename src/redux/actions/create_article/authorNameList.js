import axios from "axios";
import {
  GET_AUTHOR_LIST,
  CLEAR_AUTHOR_LIST,
  AUTHOR_LIST_ERROR,
} from "../types";

// Get current tags
export const getAuthorAndList = () => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/article/myAuthorNameAndList"
    );
    dispatch({
      type: GET_AUTHOR_LIST,
      payload: {
        author: res.data.authorName,
        authorList: res.data.allowedAuthorList,
      },
    });
  } catch (err) {
    dispatch({
      type: AUTHOR_LIST_ERROR,
      payload: {
        msg: err.response.data.message,
        status: err.response.status,
        popUpCode: err.response.data.popUpCode,
      },
    });
  }
};
