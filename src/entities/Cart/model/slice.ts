import { Product } from '@/entities'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = Pick<Product, 'id' | 'qty' | 'price'>

interface ItemsMap {
	[key: number]: CartItem
}

interface CartState {
	itemsMap: ItemsMap
	total: number
}

const initialState: CartState = {
	itemsMap: {},
	total: 0,
}

function mapToCartItem(product: Product): CartItem {
	return {
		id: product.id,
		qty: product.qty,
		price: product.price,
	}
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<Product>) {
			const item = mapToCartItem(action.payload)
			state.itemsMap[item.id] = item
			state.total += item.price * item.qty
		},
		removeItemFromCart(state, action: PayloadAction<number>) {
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
