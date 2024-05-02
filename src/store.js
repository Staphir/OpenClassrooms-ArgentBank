import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const userState = {
  firstname: 'Tony',
  name: 'Stark',
}

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

const userReducer = createReducer(userState, (builder) => {
  builder
    .addCase(connectUser)
    .addDefaultCase((state) => { return state })
})

// function userReducer(state = userState, action) {
//   if (action.type === 'user/connect') {
//     return {
//       ...state,
//       user: action.payload
//     }
//   }
//   return state
// }

export const store = configureStore({
    reducer: {
      user: userReducer,
    }
  })