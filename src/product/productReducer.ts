import * as types from './productTypes';

const initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCT_START:
      return { ...state };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state };
    case types.GET_PRODUCT_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};
