import {
  GET_CATEGORIES,
  CLEAR_CATEGORIES,
  CATEGORIES_ERROR,
} from "../../actions/types";

const initialState = {
  categories: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        error: {},
        categories: payload,
        loading: false,
      };

    case CATEGORIES_ERROR:
      return {
        categories: null,
        loading: false,
        error: payload,
      };

    case CLEAR_CATEGORIES:
      return {
        ...state,
        categories: null,
        loading: false,
      };
    default:
      return state;
  }
}
