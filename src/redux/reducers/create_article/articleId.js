import {
  GET_ARTICLE_ID,
  CLEAR_ARTICLE_ID,
  ARTICLE_ID_ERROR,
} from "../../actions/types";

const initialState = {
  articleId: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE_ID:
      return {
        ...state,
        articleId: payload,
        loading: false,
      };

    case CLEAR_ARTICLE_ID:
      return {
        error: {},
        articleId: null,
        loading: false,
      };
    case ARTICLE_ID_ERROR:
      return {
        error: payload,
        articleId: null,
        loading: false,
      };
    default:
      return state;
  }
}
