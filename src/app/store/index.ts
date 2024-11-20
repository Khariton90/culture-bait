import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './RootReducer'

import { baseApi } from '@/shared/api/baseApi'

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(baseApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export default setupStore
