import { configureStore } from '@reduxjs/toolkit'
import { createApi } from '@/shared/api'
import { rootReducer } from './RootReducer'

export const api = createApi()

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
})

export default store
