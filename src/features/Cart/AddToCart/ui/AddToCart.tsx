import { Button, ButtonGroup } from '@mui/material'
import { addOneItem, Product, removeItem, removeOneItem } from '@/entities'
import { useAppDispatch } from '@/shared/hooks'
import { useState } from 'react'

interface Props {
	product: Product
}

export function AddToCart({ product }: Props): JSX.Element {
	const [counter, setCounter] = useState(0)
	const [isIntoCart, setIsIntoCart] = useState(false)
	const dispatch = useAppDispatch()

	const addToCard = () => {
		if (!isIntoCart) {
			setIsIntoCart(() => true)
		}

		setCounter(prevCount => (prevCount += 1))
		dispatch(addOneItem(product))
	}

	const removeFromCard = () => {
		if (counter - 1 === 0) {
			setIsIntoCart(() => false)
			dispatch(removeItem(product))
		}

		setCounter(prevCount => (prevCount -= 1))
		dispatch(removeOneItem(product))
	}

	if (isIntoCart) {
		return (
			<ButtonGroup size='large' aria-label='small outlined button group'>
				<Button disabled={counter <= 0} onClick={removeFromCard}>
					-
				</Button>
				<Button disabled>{counter}</Button>
				<Button disabled={counter >= product.qty} onClick={addToCard}>
					+
				</Button>
			</ButtonGroup>
		)
	}

	return (
		<Button
			sx={{ color: '#fff' }}
			color='primary'
			type={'button'}
			variant='contained'
			size='large'
			disabled={isIntoCart}
			onClick={addToCard}
		>
			В корзину
		</Button>
	)
}
