import axios from "axios";
import { GET_ARTICLE_ID, ARTICLE_ID_ERROR } from "../types";

// GET ARICLE ID
export const getArticleId = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/article/id");
    dispatch({
      type: GET_ARTICLE_ID,
      payload: res.data.articleId,
    });
  } catch (err) {
    dispatch({
      type: ARTICLE_ID_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
