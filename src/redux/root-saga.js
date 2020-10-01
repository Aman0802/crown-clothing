import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from './user/user.sagas';

// all will have an array of generators that we wish to invoke
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
