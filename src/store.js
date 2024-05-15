import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const userState = {
  firstname: '',
  lastname: '',
};

const tokenState = '';

export const connectUser = createAction('user/connect', (userData) => {
  console.log(userData);
  return {
    payload: {
      // user: {
        firstname: userData.firstName,
        lastname: userData.lastName
      }
    // }
  }
})

const setToken = createAction('token/set', (newToken) => {
  return {
    payload: {
      token: newToken
    }
  }
})

const userReducer = createReducer(userState, (builder) => {
  builder
    .addCase(connectUser)
    .addDefaultCase((state) => { return state })
})

const tokenReducer = createReducer(tokenState, (builder) => {
  builder
    .addCase(setToken)
    .addDefaultCase((state) => { return state })
})

export const store = configureStore({
    reducer: {
      user: userReducer,
      token: tokenReducer
    }
  })