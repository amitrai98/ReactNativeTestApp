// contants for refreshing user detail
export const REFRESH_USER_DETAIL = "REFRESH_USER_DETAIL";
export const REFRESH_USER_DETAIL_INPROGRESS = "REFRESH_USER_DETAIL_INPROGRESS";
export const REFRESH_USER_DETAIL_SUCCESS = "REFRESH_USER_DETAIL_SUCCESS";
export const REFRESH_USER_DETAIL_FAILURE = "REFRESH_USER_DETAIL_FAILURE";

export function refreshUserDetail(payload) {
  return {
    type: REFRESH_USER_DETAIL,
    payload: payload
  };
}

export function refreshUserDetailProgress(payload) {
  return {
    type: REFRESH_USER_DETAIL_INPROGRESS,
    payload: payload
  };
}

export function refreshUserDetailSuccess(payload) {
  return {
    type: REFRESH_USER_DETAIL_SUCCESS,
    payload: payload
  };
}
export function refreshUserDetailFailure(payload) {
  return {
    type: REFRESH_USER_DETAIL_FAILURE,
    payload: payload
  };
}
