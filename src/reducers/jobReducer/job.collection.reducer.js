import { actionTypes } from "../../constant";

const { JobTypes } = actionTypes;
const INITIAL_STATE = {
  listJob: [],
  textSearch: "",
  isFetching: false,
  isError: false,
  message: "",
};

export default function jobCollectionReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case JobTypes.GET_JOB_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case JobTypes.GET_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listJob: payload.listJob,
        isError: false,
      };

    case JobTypes.GET_JOB_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case JobTypes.SEARCH_JOB_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case JobTypes.SEARCH_JOB_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listJob: payload.listJob,
        textSearch: payload.textSearch,
        isError: false,
      };
      
    case JobTypes.SEARCH_JOB_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
