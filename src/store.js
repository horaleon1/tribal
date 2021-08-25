import { configureStore } from '@reduxjs/toolkit'
import businesses from './reducers/businesses'

export const store = configureStore({
  reducer: {
      businesses: businesses
  },
})