import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counterReducer, { counterSlice } from './slice';

export const initialState = {
  counter: counterSlice.initialState,
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }
    default: {
      const combinedReducer = combineReducers({
        counter: counterReducer,
      });

      return combinedReducer(state, action);
    }
  }
}

export default rootReducer;
