import { applyMiddleware, createStore, combineReducers } from "redux";
import { configureStore, Tuple } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import { createLogger } from 'redux-logger';

import rootSaga from "./sagas";
import locationReducer from "./domains/locations/reducer";

const rootReducer = {
    locationReducer: locationReducer
};

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export default configureStore({
    middleware: () => new Tuple(loggerMiddleware, sagaMiddleware),
    reducer: rootReducer
  });

sagaMiddleware.run(rootSaga);
