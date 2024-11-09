import { BrowserProvider } from './BrowserProvider'
import { StoreProvider } from './StoreProvider'
import { AppThemeProvider } from './AppThemeProvider'

export function AppProvider() {
	return (
		<StoreProvider>
			<AppThemeProvider>
				<BrowserProvider />
			</AppThemeProvider>
		</StoreProvider>
	)
}
