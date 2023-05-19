/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'

const initialState = { username: 'zzz' }

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {

    builder.addMatcher(api.endpoints.signUp.matchFulfilled, (state, action) => {
      console.log(action.payload)
      state.username = action.payload

      // JSON.stringify({
      //   user: action.payload.user,
      // }),
    })

      
  },
})

export default userSlice.reducer
