import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Action
} from "@reduxjs/toolkit";
import thunk, { ThunkAction } from 'redux-thunk';
import logger from "redux-logger";
import countModule, { initialState as counterState } from './actionReducer/counter';

const rootState = {
  counter: counterState
}

const rootReducer = combineReducers({
  counter: countModule
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const setupStore = ( preloadedState = rootState) => {
  const middlewares = [...getDefaultMiddleware(), thunk];

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState,
  });

  return store;
};
