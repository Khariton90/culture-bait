import { useAppSelector } from '@/shared/hooks'
import { AppRoute } from '@/shared/types'
import {
	CheckoutHeader,
	LayoutFooter,
	LayoutHeader,
	LayoutNavigation,
} from '@/widgets'
import { OrderPreview } from '@/widgets/OrderPreview'
import { VerticalProductList } from '@/widgets/VerticalProductList'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout(): JSX.Element {
	const { pathname } = useLocation()
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const productValues = Object.values(itemsMap)

	return (
		<>
			{pathname === AppRoute.Checkout ? (
				<CheckoutHeader />
			) : (
				<LayoutHeader
					rightSlot={
						<LayoutNavigation
							orderPreviewSlot={
								<OrderPreview
									listSlot={<VerticalProductList products={productValues} />}
								/>
							}
						/>
					}
				/>
			)}
			<main className='content'>{<Outlet />}</main>
			<LayoutFooter />
		</>
	)
}
