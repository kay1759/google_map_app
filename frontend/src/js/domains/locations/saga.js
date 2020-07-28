import { put, call, takeEvery } from "redux-saga/effects";

import { LOCATION } from "../../constants/ActionTypes";
import * as APIEndpoints from "../../constants/APIEndpoints";
import { getAjax } from "../../utils/ajax";
import { receiveResources } from "./actionCreators";

export function* loadResources(action) {
    const json = yield call(getAjax, APIEndpoints.LOCATIONS, { loc_type: action.category } );

    if (json) {
	yield put(receiveResources(json));
    } else {
    }
}

export default [takeEvery(LOCATION.LOAD_RESOURCES, loadResources)];
