import { cartSlice } from '@/entities'
import { wishListSlice } from '@/entities/Wishlist/model'
import { baseApi } from '@/shared/api/baseApi'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[wishListSlice.name]: wishListSlice.reducer,
})
