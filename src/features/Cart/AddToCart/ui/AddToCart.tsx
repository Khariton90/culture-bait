import { Button, ButtonGroup } from '@mui/material'
import { addItemToCart, decQty, incQty, Product } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import styles from './styles.module.scss'

interface Props {
	product: Product
	size?: 'small' | 'large' | 'medium'
}

export function AddToCart({ product, size = 'large' }: Props): JSX.Element {
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const dispatch = useAppDispatch()
	const incQuantity = () => {
		dispatch(incQty(product.id))
	}
	const decQuantity = () => {
		dispatch(decQty(product.id))
	}

	const productItem = itemsMap[product.id]

	if (productItem) {
		return (
			<div className={styles.addToCart}>
				<ButtonGroup size={size} aria-label='small outlined button group'>
					<Button disabled={productItem.qty <= 0} onClick={decQuantity}>
						-
					</Button>
					<Button disabled>{productItem.qty}</Button>
					<Button
						disabled={productItem.qty >= product.qty}
						onClick={incQuantity}
					>
						+
					</Button>
				</ButtonGroup>
			</div>
		)
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
