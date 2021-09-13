import { put, call, takeEvery } from "redux-saga/effects";

import { LOCATION } from "../../constants/ActionTypes";
import * as APIEndpoints from "../../constants/APIEndpoints";
import { getAjax } from "../../utils/ajax";
import { loadResources, receiveResources } from "./actionCreators";

function* handleLoadResources(action: ReturnType<typeof loadResources>) {
  const json: TAssociative = yield call(getAjax, APIEndpoints.GRAPHQL, {
    query: action.query,
  });

  if (json) {
    yield put(receiveResources(json));
  }
}

export default [takeEvery(LOCATION.LOAD_RESOURCES, handleLoadResources)];
