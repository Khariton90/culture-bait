import { GoToCart } from '@/features/Cart'
import { LayoutFooter, LayoutHeader, LayoutNavigation } from '@/widgets'
import { Outlet } from 'react-router-dom'

export function Layout(): JSX.Element {
	return (
		<>
			<div className='container'>
				<LayoutHeader
					rightSlot={<LayoutNavigation goToCartSlot={<GoToCart />} />}
				/>
				<main className='content'>{<Outlet />}</main>
			</div>
			<LayoutFooter />
		</>
	)
}
