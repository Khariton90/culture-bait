import { ProductId } from '@/entities/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WishlistState {
	products: Record<ProductId, boolean>
}

const initialState: WishlistState = {
	products: {},
}

export const wishListSlice = createSlice({
	name: 'wishList',
	initialState,
	reducers: {
		clearWishList: state => {
			state.products = {}
		},
		toggleWishListProduct: (state, action: PayloadAction<number>) => {
			if (state.products[action.payload]) {
				state.products[action.payload] = false
			} else {
				state.products[action.payload] = true
			}
		},
	},
})

export const { clearWishList, toggleWishListProduct } = wishListSlice.actions
