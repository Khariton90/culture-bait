import { Drawer } from '@mui/material'
import { useAppSelector } from '@/shared/hooks'
import { EmptyCart } from './EmptyCart'
import { FilledCart } from './FilledCart'

interface Props {
	toggleCart: () => void
	isOpen: boolean
}

export function Cart({ toggleCart, isOpen }: Props): JSX.Element {
	const values = useAppSelector(({ CART_TAG }) =>
		Object.values(CART_TAG.itemsMap)
	)

	return (
		<Drawer anchor={'right'} open={isOpen} onClose={toggleCart}>
			{!values.length ? <EmptyCart /> : <FilledCart products={values} />}
		</Drawer>
	)
}
