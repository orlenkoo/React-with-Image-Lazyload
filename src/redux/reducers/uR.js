import { GET_UR, UR_ERROR, CLEAR_UR } from "../actions/types";

const initialState = {
  uR: {},
  loading: true,
  error: {},
  userId: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UR:
      return {
        ...state,
        uR: payload.uR,
        loading: false,
        userId: payload.userId,
      };
    case UR_ERROR:
      return {
        uR: null,
        error: payload,
        loading: false,
        userId: null,
      };
    case CLEAR_UR:
      return {
        uR: null,
        error: payload,
        loading: false,
        userId: null,
      };
    default:
      return state;
  }
}
