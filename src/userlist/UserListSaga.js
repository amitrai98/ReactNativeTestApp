import { put, takeLatest } from "redux-saga/effects";
import * as types from "./UserListActions";

export function* handleGetUserList(action) {
  yield put(types.getUserListProgress());
  //perform work logic
}

export function* watchGetUserList() {
  yield takeLatest(types.GET_USER_LIST, handleGetUserList);
}
