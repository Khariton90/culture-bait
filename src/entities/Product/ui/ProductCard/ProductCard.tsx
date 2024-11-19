import ratingIcon from '@/shared/images/icons/rating.svg'
import { Button, ButtonGroup } from '@mui/material'
import {
	addOneItem,
	Product,
	removeItem,
	removeOneItem,
	RibbonList,
} from '@/entities'
import { ReactNode, useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch } from '@/shared/hooks'

interface Props {
	product: Product
	wishSlot: ReactNode
}

export function ProductCard({ product, wishSlot }: Props): JSX.Element {
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

	return (
		<article className={styles.card}>
			<div className={styles.top}>
				<RibbonList isNew isBestSeller onSale clearance />
				<figure className={styles.figure}>
					<img className='productImage' src={product.img} alt={product.title} />
				</figure>

				<div className={styles.feed}>
					<a href='/' className={styles.rate}>
						<img src={ratingIcon} alt='Рейтинг' /> <span>3.5</span>
					</a>
					{wishSlot}
				</div>
			</div>

			<div className={styles.rowBetween}>
				<h3 className={styles.title}>{product.title}</h3>
				<span className={styles.smallGrey}>Код: {product.code}</span>
			</div>

			<div className={styles.rowBetween}>
				<span className={styles.smallGrey}>Наличие</span>
				<span className={styles.smallGrey}>{product.qty} шт.</span>
			</div>

			<p className='productDescription'>{product.description}</p>

			<div className={styles.panel}>
				<div className={styles.rowBetween}>
					<span className={styles.smallGrey}>Цена за штуку</span>
					<h4>{product.price} ₽</h4>
				</div>

				<div className={styles.rowBetween}>
					{isIntoCart ? (
						<ButtonGroup size='large' aria-label='small outlined button group'>
							<Button disabled={counter <= 0} onClick={removeFromCard}>
								-
							</Button>
							<Button disabled>{counter}</Button>
							<Button disabled={counter >= product.qty} onClick={addToCard}>
								+
							</Button>
						</ButtonGroup>
					) : (
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
					)}
				</div>
			</div>
		</article>
	)
}
