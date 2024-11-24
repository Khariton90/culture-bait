import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './types'

interface ProductState {
	products: Pick<Product, 'id' | 'qty' | 'code'>[]
}

const initialState: ProductState = {
	products: [],
}

export const productSlice = createSlice({
	name: 'productSlice',
	initialState,
	reducers: {
		addOneItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index !== -1) {
				state.products[index].qty += 1
				return
			}

			state.products.push({
				id: action.payload.id,
				qty: action.payload.qty,
				code: action.payload.code,
			})
		},

		removeOneItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index !== -1) {
				state.products[index].qty -= 1
			}
		},
		removeItem(state, action: PayloadAction<Product>) {
			const index = state.products.findIndex(
				item => item.id === action.payload.id
			)

			if (index !== -1) {
				state.products.splice(index, 1)
			}
		},
	},
})

export const { addOneItem, removeOneItem, removeItem } = productSlice.actions
