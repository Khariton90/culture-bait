import { createTheme, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

const theme = createTheme({
	palette: {
		primary: {
			main: '#51b56d',
		},
	},
})

interface Props {
	children: ReactNode
}

export function AppThemeProvider({ children }: Props): JSX.Element {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
