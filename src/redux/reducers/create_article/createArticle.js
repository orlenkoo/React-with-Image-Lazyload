import { GET_ARTICLE, ARTICLE_ERROR } from "../../actions/types";

const initialState = {
  article: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE:
      return {
        ...state,
        article: payload,
        loading: false,
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_ARTICLE:
      return {
        ...state,
        article: null,

        loading: false,
      };
    default:
      return state;
  }
}
