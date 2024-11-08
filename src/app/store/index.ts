import { configureStore } from '@reduxjs/toolkit'
import { createApi } from '@/shared/api'

export const api = createApi()

const store = configureStore({
	reducer: {},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
})

export default store
