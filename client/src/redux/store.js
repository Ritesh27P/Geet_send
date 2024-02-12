import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './createUserSlice';
export const store = configureStore({
  reducer: {
        user: userSlice.reducer,
  },
})