import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createRootReducer } from './store';

const enhancers: [] = [];
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__) || null;

  if (typeof devToolsExtension === 'function') {
    // @ts-ignore
    enhancers.push(devToolsExtension());
  }
}

export const configureStore = (preloadedState = {}) => {
  const store = createStore(createRootReducer(), preloadedState, compose(applyMiddleware(thunk), ...enhancers));

  return store;
};
