import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserProvider } from './browser-provider'
import { StoreProvider } from './store-provider'

const theme = createTheme({
	palette: {
		primary: {
			main: '#51b56d',
		},
	},
})

export function AppProvider() {
	return (
		<StoreProvider>
			<ThemeProvider theme={theme}>
				<BrowserProvider />
			</ThemeProvider>
		</StoreProvider>
	)
}
