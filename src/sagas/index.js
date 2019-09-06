import { all } from "redux-saga/effects";
import { watchGetUserList } from "../userlist/UserListSaga";

export default function* rootSaga() {
  yield all([
    watchGetUserList()    
  ]);
}
