import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer
});

const makeStore = (ctx) => {
  return store;
}

export const wrapper = createWrapper(makeStore, { debug: true });
