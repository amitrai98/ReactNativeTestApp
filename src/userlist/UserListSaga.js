import { put, takeLatest } from "redux-saga/effects";
import * as types from "./UserListActions";
import ApiHandler from "../networkhandler/ApiHandler";
import ApiConst from "../networkhandler/ApiConst";
import { isEmpty, isEmptyField } from "../util/Utility";
export function* handleGetUserList(action) {
  yield put(types.getUserListProgress());
  try {
    const instance = ApiHandler.getInstance(ApiConst.TOKEN);
    let response = yield instance.getUserData(
      action.payload.user_id,
      action.payload.loggedin_user_id
    );
    if (
      !isEmpty(response.response) &&
      response.response.status === 200 &&
      !isEmpty(response.response.data) &&
      !isEmpty(response.response.data.data)
    )
      yield put(
        types.getUserListSuccess({ data: response.response.data.data })
      );
    else yield put(types.getUserListFailure({ error: response.response }));
  } catch (error) {
    yield put(types.getUserListFailure({ error: error }));
  }
}

export function* watchGetUserList() {
  yield takeLatest(types.GET_USER_LIST, handleGetUserList);
}
