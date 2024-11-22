import { Button, ButtonGroup } from '@mui/material'
import { addItemToCart, decQty, incQty, Product } from '@/entities'
import { useAppDispatch } from '@/shared/hooks'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

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
		dispatch(addItemToCart({ ...product, qty: 1 }))
	}

	const incQuantity = () => {
		setCounter(prevCount => (prevCount += 1))
		dispatch(incQty(product.id))
	}

	const decQuantity = () => {
		setCounter(prevCount => (prevCount -= 1))
		dispatch(decQty(product.id))
	}

	useEffect(() => {
		if (!counter && isIntoCart) {
			setIsIntoCart(false)
		}
	}, [counter, isIntoCart])

	if (isIntoCart) {
		return (
			<div className={styles.addToCart}>
				<ButtonGroup size='large' aria-label='small outlined button group'>
					<Button disabled={counter <= 0} onClick={decQuantity}>
						-
					</Button>
					<Button disabled>{counter}</Button>
					<Button disabled={counter >= product.qty} onClick={incQuantity}>
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
				size='large'
				disabled={isIntoCart}
				onClick={addToCard}
			>
				В корзину
			</Button>
		</div>
	)
}
