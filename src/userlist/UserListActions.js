// contants for getting userlist
export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_LIST_INPROGRESS = "GET_USER_LIST_INPROGRESS";
export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE";

export function getUserList(payload) {
  return {
    type: GET_USER_LIST,
    payload: payload
  };
}

export function getUserListProgress(payload) {
  return {
    type: GET_USER_LIST_INPROGRESS,
    payload: payload
  };
}

export function getUserListSuccess(payload) {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: payload
  };
}
export function getUserListFailure(payload) {
  return {
    type: GET_USER_LIST_FAILURE,
    payload: payload
  };
}
