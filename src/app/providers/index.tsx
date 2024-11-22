import { StoreProvider } from './StoreProvider'
import { AppThemeProvider } from './AppThemeProvider'
import HistoryRouter from './HistoryRouter'
import browserHistory from '@/shared/lib/browserHistory'
import { Route, Routes } from 'react-router-dom'
import { Home, ProductPage, Dashboard, NotFound } from '@/pages'
import { ManageProduct } from '@/pages/ManageProduct/ManageProduct'
import { AppRoute } from '@/shared/types'

export function AppProvider() {
	return (
		<StoreProvider>
			<AppThemeProvider>
				<HistoryRouter history={browserHistory}>
					<Routes>
						<Route path={AppRoute.Home} element={<Home />} />
						<Route path={AppRoute.Product} element={<ProductPage />} />
						<Route path={AppRoute.Dashboard} element={<Dashboard />} />
						<Route path={AppRoute.СreateProduct} element={<ManageProduct />} />
						<Route path={AppRoute.NotFound} element={<NotFound />} />
					</Routes>
				</HistoryRouter>
			</AppThemeProvider>
		</StoreProvider>
	)
}
