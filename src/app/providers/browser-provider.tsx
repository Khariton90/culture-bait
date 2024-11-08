import { Home, Dashboard, NotFound } from '@/pages'
import { AppRoute } from '@/shared/types'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
	[
		{
			errorElement: <NotFound />,
			children: [
				{
					path: AppRoute.Home,
					children: [{ path: '*', element: <Home /> }],
				},
				{
					path: AppRoute.Dashboard,
					children: [{ path: '*', element: <Dashboard /> }],
				},
			],
		},
	],
	{
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
			v7_relativeSplatPath: true,
		},
	}
)

export function BrowserProvider(): JSX.Element {
	return (
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	)
}
