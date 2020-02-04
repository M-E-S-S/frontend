import { combineReducers } from 'redux';

import dashboard from '../dashboard/dashboardReducer';
import products from '../products/productsReducer';
import product from '../product/productReducer';

const rootReducer = combineReducers({
  dashboard,
  products,
  product,
});

export default rootReducer;
