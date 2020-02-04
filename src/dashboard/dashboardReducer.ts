import * as types from './dashboardTypes';

const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCTS_START:
      return { ...state };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state };
    case types.GET_PRODUCTS_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};
