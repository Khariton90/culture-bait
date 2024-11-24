import { Button, ButtonGroup } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { decQty, incQty, Product } from '@/entities'

interface Props {
	product: Product
	size?: 'small' | 'large' | 'medium'
}

export function ControlsCart({ product, size = 'large' }: Props): JSX.Element {
	const dispatch = useAppDispatch()
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const productInCart = itemsMap[product.id]
	const incQuantity = (product: Product) => {
		dispatch(incQty(product.id))
	}
	const decQuantity = (product: Product) => {
		dispatch(decQty(product.id))
	}

	return (
		<ButtonGroup size={size} aria-label='small outlined button group'>
			<Button disabled={product.qty <= 0} onClick={() => decQuantity(product)}>
				-
			</Button>
			<Button disabled>{productInCart.qty}</Button>
			<Button
				disabled={productInCart.qty >= product.qty}
				onClick={() => incQuantity(product)}
			>
				+
			</Button>
		</ButtonGroup>
	)
}
