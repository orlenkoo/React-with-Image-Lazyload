import { GET_PM_AT, ERROR_PM_AT, CLEAR_PM_AT } from "../../actions/types";

const initialState = {
  pmAt: {},
  loading: true,
  error: {},
  userId: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PM_AT:
      return {
        ...state,
        pmAt: payload.pmat,
        loading: false,
        userId: payload.userId,
      };
    case ERROR_PM_AT:
      return {
        pmAt: null,
        error: payload,
        loading: false,
        userId: null,
      };
    case CLEAR_PM_AT:
      return {
        pmAt: null,
        error: payload,
        loading: false,
        userId: null,
      };
    default:
      return state;
  }
}
