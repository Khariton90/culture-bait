import { LayoutFooter, LayoutHeader, LayoutNavigation } from '@/widgets'
import { Outlet } from 'react-router-dom'

export function Layout(): JSX.Element {
	return (
		<>
			<LayoutHeader rightSlot={<LayoutNavigation />} />
			<main className='content'>{<Outlet />}</main>
			<LayoutFooter />
		</>
	)
}
