import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/GlavniReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})