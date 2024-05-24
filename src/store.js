import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const userState = {
  firstname: '',
  lastname: '',
};

export const setUser = createAction('setUser');

const userReducer = createReducer(userState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    })
    .addDefaultCase((state) => { return state })
})

export const store = configureStore({
    reducer: {
      user: userReducer
    }
  })