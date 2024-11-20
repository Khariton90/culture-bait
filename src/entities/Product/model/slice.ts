import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './types'

interface ProductState {
	products: Pick<Product, 'id' | 'qty'>[]
	productList: Product[]
}

const initialState: ProductState = {
	products: [],
	productList: [],
}

export const productSlice = createSlice({
	name: 'productSlice',
	initialState,
	reducers: {
		addOneItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index === -1) {
				state.products.push({ id: action.payload.id, qty: action.payload.qty })
				return
			}

			state.products[index].qty += 1
		},

		removeOneItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index === -1) {
				return
			}

			state.products[index].qty -= 1
		},
		removeItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index === -1) {
				return
			}
			state.products.splice(index, 1)
		},
	},
})

export const { addOneItem, removeOneItem, removeItem } = productSlice.actions
export default productSlice.reducer
