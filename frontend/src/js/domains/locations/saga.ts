import { put, call, takeEvery } from "redux-saga/effects";

import { LOCATION } from "../../constants/ActionTypes";
import * as APIEndpoints from "../../constants/APIEndpoints";
import { getAjax } from "../../utils/ajax";
import { receiveResources } from "./actionCreators";

function* loadResources() {
    const json: TAssociative = yield call(getAjax, APIEndpoints.LOCATIONS, {} );

    if (json) {
	yield put(receiveResources(json));
    } else {
    }
}

export default [takeEvery(LOCATION.LOAD_RESOURCES, loadResources)];
