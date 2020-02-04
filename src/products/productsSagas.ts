import {
  put,
  takeLatest,
} from 'redux-saga/effects';

// Types
import * as types from './productsTypes';

export const defaultSaga = () => ({ type: types.GET_PRODUCTS_START });

export function* defaultSagaWorker() {
  try {
    yield put({ type: types.GET_PRODUCTS_SUCCESS });
  } catch (err) {
    yield put({ type: types.GET_PRODUCTS_FAIL });
  }
}

export const defaultSagaWatcher = () => takeLatest(
  types.GET_PRODUCTS_START,
  defaultSagaWorker,
);

export default [
  defaultSagaWatcher(),
];
