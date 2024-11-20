import { configureStore } from '@reduxjs/toolkit'
import { createApi } from '@/shared/api'
import { rootReducer } from './RootReducer'
import { productApi } from '@/entities'

export const api = createApi()

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: api,
				},
			}).concat(productApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export default setupStore
