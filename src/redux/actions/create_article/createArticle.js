import axios from "axios";
import { setAlert } from "../alert";

import { GET_ARTICLE, ARTICLE_ERROR } from "../types";

// Get current article
export const getCurrentArticle = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/article");
    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or Update new article
export const createNewArticle = (formData, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:8000/api/article",
      formData,
      config
    );

    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    });
    dispatch(setAlert("Article updated!"));
  } catch (err) {
    const errors = err.response.data.message;
    if (errors) {
      dispatch(setAlert(err.response.data.message, "danger"));
    }
    dispatch({
      type: ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
