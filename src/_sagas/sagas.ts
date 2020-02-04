import { all } from 'redux-saga/effects';

import dashboardSagas from '../dashboard/dashboardSagas';
import productsSagas from '../products/productsSagas';
import productSagas from '../product/productSagas';

// Root Saga
export default function* root() {
  yield all([
    ...dashboardSagas,
    ...productsSagas,
    ...productSagas,
  ]);
}
