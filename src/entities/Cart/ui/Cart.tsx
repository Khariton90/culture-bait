import { Drawer } from '@mui/material'
import { useAppSelector } from '@/shared/hooks'
import { EmptyCart } from './EmptyCart'
import { FilledCart } from './FilledCart'
import { useState } from 'react'

export function Cart(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)

	const toggleCart = () => {
		setIsOpen(prev => !prev)
	}

	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const values = Object.values(itemsMap)

	return (
		<Drawer anchor={'right'} open={isOpen} onClose={toggleCart}>
			{!values.length ? <EmptyCart /> : <FilledCart products={values} />}
		</Drawer>
	)
}
