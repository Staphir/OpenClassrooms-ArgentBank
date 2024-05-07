import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const userState = {
  firstname: '',
  name: '',
};

const tokenState = '';

const connectUser = createAction('user/connect', (userData) => {
  return {
    payload: {
      user: {
        firstname: userData.firstname,
        name: userData.name
      }
    }
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