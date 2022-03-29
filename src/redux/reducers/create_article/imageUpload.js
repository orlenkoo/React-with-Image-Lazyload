import {
  ARTICLE_IMAGES_ERROR,
  GET_ARTICLE_IMAGES,
  CLEAR_ARTICLE_IMAGES,
} from "../../actions/types";

const initialState = {
  articleImg: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE_IMAGES:
      return {
        ...state,
        articleImg: payload,
        loading: false,
      };
    case ARTICLE_IMAGES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_ARTICLE_IMAGES:
      return {
        articleImg: null,
        error: {},
        loading: false,
      };
    default:
      return state;
  }
}
