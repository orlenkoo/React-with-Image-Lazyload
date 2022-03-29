import axios from "axios";
import { GET_CATEGORIES, CLEAR_CATEGORIES, CATEGORIES_ERROR } from "../types";

// Get current tags
export const getCurrentCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/article/selectartcat"
    );
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.data.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
