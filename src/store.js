import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const userState = {
  firstname: '',
  lastname: '',
};

const tokenState = '';

export const connectUser = createAction('connectUser');

const userReducer = createReducer(userState, (builder) => {
  builder
    .addCase(connectUser, (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    })
    .addDefaultCase((state) => { return state })
})

export const setToken = createAction('setToken');

const tokenReducer = createReducer(tokenState, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      state = action.payload;
    })
    .addDefaultCase((state) => { return state })
})

export const store = configureStore({
    reducer: {
      user: userReducer,
      token: tokenReducer
    }
  })