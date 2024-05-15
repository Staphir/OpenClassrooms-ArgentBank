import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
// import axios from "axios";

const userState = {
  firstname: '',
  lastname: '',
};

const tokenState = '';

export const setUser = createAction('setUser');

const userReducer = createReducer(userState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    })
    .addDefaultCase((state) => { return state })
})

export const setToken = createAction('setToken');

const tokenReducer = createReducer(tokenState, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      // axios.defaults.headers.common['Authorization'] = "Bearer" + action.payload //set axios default token
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