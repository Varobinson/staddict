
import { compose, createStore } from 'redux';

import { rootReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers()

export const store = createStore(
  rootReducer,
  middleware
);