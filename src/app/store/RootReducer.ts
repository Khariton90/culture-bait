import { productSlice } from '@/entities'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[productSlice.name]: productSlice.reducer,
})
