import { productApi } from '@/entities'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[productApi.reducerPath]: productApi.reducer,
})
