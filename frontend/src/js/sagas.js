import { all } from "redux-saga/effects";

import location from "./domains/locations/saga";

export default function* rootSaga() {
    yield all([
	...location
    ])
}
