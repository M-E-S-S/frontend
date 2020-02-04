import {
  put,
  takeLatest,
} from 'redux-saga/effects';

// Types
import * as types from './productTypes';

export const defaultSaga = () => ({ type: types.GET_PRODUCT_START });

export function* defaultSagaWorker() {
  try {
    yield put({ type: types.GET_PRODUCT_SUCCESS });
  } catch (err) {
    yield put({ type: types.GET_PRODUCT_FAIL });
  }
}

export const defaultSagaWatcher = () => takeLatest(
  types.GET_PRODUCT_START,
  defaultSagaWorker,
);

export default [
  defaultSagaWatcher(),
];
