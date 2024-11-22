import { Drawer } from '@mui/material'
import { useAppSelector } from '@/shared/hooks'
import { EmptyCart } from './EmptyCart'
import { FilledCart } from './FilledCart'

interface Props {
	isOpen: boolean
	toggleCart: () => void
}

export function Cart({ isOpen, toggleCart }: Props): JSX.Element {
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const values = Object.values(itemsMap)

	return (
		<Drawer anchor={'right'} open={isOpen} onClose={toggleCart}>
			{!values.length ? <EmptyCart /> : <FilledCart products={values} />}
		</Drawer>
	)
}
