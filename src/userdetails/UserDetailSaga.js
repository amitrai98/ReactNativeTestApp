import { put, takeLatest } from "redux-saga/effects";
import * as types from "./UserDetailActions";

export function* handleRefreshUserDetail(action) {
  yield put(types.refreshUserDetail());
}

export function* watchRefreshUserDetail() {
  yield takeLatest(types.REFRESH_USER_DETAIL, handleRefreshUserDetail);
}
