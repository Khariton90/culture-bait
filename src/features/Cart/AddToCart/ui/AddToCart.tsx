import { Button } from '@mui/material'
import { addItemToCart, Product } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

interface Props {
	product: Product
	size?: 'small' | 'large' | 'medium'
	controlsSlot?: ReactNode
}

export function AddToCart({
	product,
	size = 'large',
	controlsSlot,
}: Props): JSX.Element {
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const dispatch = useAppDispatch()
	const productItem = itemsMap[product.id]

	if (productItem) {
		return <div className={styles.addToCart}>{controlsSlot}</div>
	}

	return (
		<div className={styles.addToCart}>
			<Button
				sx={{ color: '#fff' }}
				color='primary'
				type={'button'}
				variant='contained'
				size={size}
				onClick={() => dispatch(addItemToCart(product))}
			>
				В корзину
			</Button>
		</div>
	)
}
