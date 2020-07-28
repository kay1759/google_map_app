import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import { createLogger } from 'redux-logger';

import rootSaga from "./sagas";
import locationReducer from "./domains/locations/reducer";

const rootReducer = combineReducers({
    locationReducer
});

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export default createStore(
    rootReducer,
    applyMiddleware(
	sagaMiddleware,
        loggerMiddleware
    )
);

sagaMiddleware.run(rootSaga);
