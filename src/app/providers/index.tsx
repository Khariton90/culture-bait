import { BrowserProvider } from './browser-provider'
import { StoreProvider } from './store-provider'

export function AppProvider() {
	return (
		<StoreProvider>
			<BrowserProvider />
		</StoreProvider>
	)
}
