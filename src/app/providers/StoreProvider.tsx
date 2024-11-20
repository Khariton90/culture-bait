import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../store'

interface StoreProviderProps {
	children: ReactNode
}

const store = setupStore()

export function StoreProvider({ children }: StoreProviderProps): JSX.Element {
	return <Provider store={store}>{children}</Provider>
}
