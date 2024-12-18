import { ItemsMap, mapToCartProduct, Product } from '@/entities'
import { TagsApi } from '@/shared/api/tags.enum'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
	itemsMap: ItemsMap
	total: number
}

const initialState: CartState = {
	itemsMap: {},
	total: 0,
}

export const cartSlice = createSlice({
	name: TagsApi.CART_TAG,
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<Product>) {
			const item = mapToCartProduct(action.payload)
			state.itemsMap[item.id] = item
			state.total += item.price
		},
		removeItemFromCart(state, action: PayloadAction<number>) {
			const item = state.itemsMap[action.payload]
			state.total -= item.price * item.qty
			delete state.itemsMap[action.payload]
		},
		incQty(state, action: PayloadAction<number>) {
			const item = state.itemsMap[action.payload]
			item.qty++
			state.total += item.price
		},
		decQty(state, action: PayloadAction<number>) {
			const item = state.itemsMap[action.payload]
			item.qty--
			state.total -= item.price

			if (!item.qty) {
				delete state.itemsMap[item.id]
			}
		},
		setEmptyCart(state) {
			state.itemsMap = {}
			state.total = 0
		},
	},
})

export const {
	addItemToCart,
	incQty,
	decQty,
	removeItemFromCart,
	setEmptyCart,
} = cartSlice.actions
