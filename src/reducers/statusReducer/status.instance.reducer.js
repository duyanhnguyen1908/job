import { actionTypes } from "../../constant";

const { StatusTypes } = actionTypes;
const INITIAL_STATE = {
  item: {
    id: null,
  },
  isFetching: false,
  isError: false,
  message: "",
};

export default function statusInstanceReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case StatusTypes.CREATE_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case StatusTypes.CREATE_STATUS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case StatusTypes.CREATE_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case StatusTypes.DELETE_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case StatusTypes.DELETE_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case StatusTypes.DELETE_STATUS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case StatusTypes.UPDATE_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case StatusTypes.UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case StatusTypes.UPDATE_STATUS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case StatusTypes.CLEAR_STATUS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
