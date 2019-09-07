import * as types from "./UserDetailActions";

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {}
};

export default function userDetailReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REFRESH_USER_DETAIL_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true
      };
    case types.REFRESH_USER_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data
      };
    case types.REFRESH_USER_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
}
