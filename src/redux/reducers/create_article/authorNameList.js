import {
  GET_AUTHOR_LIST,
  CLEAR_AUTHOR_LIST,
  AUTHOR_LIST_ERROR,
} from "../../actions/types";

const initialState = {
  authorList: [],
  author: {},
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AUTHOR_LIST:
      return {
        error: {},
        authorList: payload.authorList,
        author: payload.author,
        loading: false,
      };
    case AUTHOR_LIST_ERROR:
      return {
        error: payload,
        authorList: [],
        author: {},
        loading: false,
      };
    case CLEAR_AUTHOR_LIST:
      return {
        ...state,
        authorList: [],
        author: {},
        loading: false,
      };
    default:
      return state;
  }
}
