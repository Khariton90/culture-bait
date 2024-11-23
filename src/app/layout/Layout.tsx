import { LayoutFooter, LayoutHeader, LayoutNavigation } from '@/widgets'
import { OrderPreview } from '@/widgets/OrderPreview'
import { Outlet } from 'react-router-dom'

export function Layout(): JSX.Element {
	return (
		<>
			<LayoutHeader
				rightSlot={<LayoutNavigation orderPreviewSlot={<OrderPreview />} />}
			/>
			<main className='content'>{<Outlet />}</main>
			<LayoutFooter />
		</>
	)
}
