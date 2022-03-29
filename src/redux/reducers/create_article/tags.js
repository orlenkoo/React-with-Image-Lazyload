import { GET_TAGS, CLEAR_TAGS, TAGS_ERROR } from "../../actions/types";

const initialState = {
  tags: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TAGS:
      return {
        error: {},
        tags: payload,
        loading: false,
      };

    case CLEAR_TAGS:
      return {
        ...state,
        tags: null,
        loading: false,
      };
    case TAGS_ERROR:
      return {
        tags: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
