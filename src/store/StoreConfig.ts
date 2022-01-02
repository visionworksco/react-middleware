import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({});

const middleware = [thunk];

const inittialState = {};

export type State = ReturnType<typeof combinedReducer>;

export const StoreConfig = createStore(
  combinedReducer,
  inittialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
