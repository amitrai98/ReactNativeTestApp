import { all } from "redux-saga/effects";
import { watchGetUserList } from "../userlist/UserListSaga";
import { watchRefreshUserDetail } from "../userdetails/UserDetailSaga";

export default function* rootSaga() {
  yield all([watchGetUserList(), watchRefreshUserDetail()]);
}
