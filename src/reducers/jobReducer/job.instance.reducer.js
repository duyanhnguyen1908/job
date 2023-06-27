import { actionTypes } from "../../constant";

const { JobTypes } = actionTypes;
const INITIAL_STATE = {
  item: {
    id: null,
  },
  isFetching: false,
  isError: false,
  message: "",
};

export default function jobInstanceReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case JobTypes.CREATE_JOB_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case JobTypes.CREATE_JOB_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case JobTypes.CREATE_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case JobTypes.DELETE_JOB_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case JobTypes.DELETE_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case JobTypes.DELETE_JOB_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case JobTypes.UPDATE_JOB_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case JobTypes.UPDATE_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case JobTypes.UPDATE_JOB_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case JobTypes.CLEAR_JOB:
      return INITIAL_STATE;
    default:
      return state;
  }
}
