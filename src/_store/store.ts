import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';

import rootSaga from '../_sagas';
import rootReducer from '../_reducers';

import middleware, { sagaMiddleware } from './storeMiddleware';

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(
      ...middleware,
    )),
  );

  sagaMiddleware.run(rootSaga);

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('../_reducers', () => {
      // eslint-disable-next-line
      store.replaceReducer(require('../_reducers').default);
    });
  }

  return store;
};

const store = configStore();


export default store;
