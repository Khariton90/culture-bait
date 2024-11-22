import { StoreProvider } from './StoreProvider'
import { AppThemeProvider } from './AppThemeProvider'
import HistoryRouter from './HistoryRouter'
import browserHistory from '@/shared/lib/browserHistory'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductPage, DashboardPage, NotFoundPage } from '@/pages'
import { ManageProductPage } from '@/pages/ManageProductPage/ManageProductPage'
import { AppRoute } from '@/shared/types'
import { Layout } from '../Layout'

export function AppProvider() {
	return (
		<StoreProvider>
			<AppThemeProvider>
				<HistoryRouter history={browserHistory}>
					<Routes>
						<Route path={AppRoute.Home} element={<Layout />}>
							<Route index path={AppRoute.Home} element={<HomePage />} />
							<Route path={AppRoute.Product} element={<ProductPage />} />
							<Route path={AppRoute.Dashboard} element={<DashboardPage />} />
							<Route
								path={AppRoute.СreateProduct}
								element={<ManageProductPage />}
							/>
							<Route path={AppRoute.NotFound} element={<NotFoundPage />} />
						</Route>
					</Routes>
				</HistoryRouter>
			</AppThemeProvider>
		</StoreProvider>
	)
}
