import { actionTypes } from "../../constant";

const { StatusTypes } = actionTypes;
const INITIAL_STATE = {
  listStatus: [],
  textSearch: "",
  isFetching: false,
  isError: false,
  message: "",
};

export default function statusCollectionReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case StatusTypes.GET_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };

    case StatusTypes.GET_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listStatus: payload.listStatus,
        isError: false,
      };

    case StatusTypes.GET_STATUS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };

    case StatusTypes.SEARCH_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case StatusTypes.SEARCH_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listStatus: payload.listStatus,
        textSearch: payload.textSearch,
        isError: false,
      };

    case StatusTypes.SEARCH_STATUS_FAILURE:
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
