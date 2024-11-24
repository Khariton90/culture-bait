import { StoreProvider } from './StoreProvider'
import { AppThemeProvider } from './AppThemeProvider'
import HistoryRouter from './HistoryRouter'
import browserHistory from '@/shared/lib/browserHistory'
import { Route, Routes } from 'react-router-dom'
import {
	HomePage,
	ProductPage,
	DashboardPage,
	NotFoundPage,
	CheckoutPage,
} from '@/pages'
import { ManageProductPage } from '@/pages/ManageProductPage/ManageProductPage'
import { AppRoute } from '@/shared/types'
import { Layout } from '../layout'

const routes = {
	[AppRoute.Home]: <HomePage />,
	[AppRoute.Product]: <ProductPage />,
	[AppRoute.Dashboard]: <DashboardPage />,
	[AppRoute.СreateProduct]: <ManageProductPage />,
	[AppRoute.NotFound]: <NotFoundPage />,
	[AppRoute.Checkout]: <CheckoutPage />,
}

export function AppProvider() {
	return (
		<StoreProvider>
			<AppThemeProvider>
				<HistoryRouter history={browserHistory}>
					<Routes>
						<Route path={AppRoute.Home} element={<Layout />}>
							{Object.entries(routes).map(([path, element], index) => (
								<Route
									index={index === 0}
									path={path}
									element={element}
									key={path}
								/>
							))}
						</Route>
					</Routes>
				</HistoryRouter>
			</AppThemeProvider>
		</StoreProvider>
	)
}
