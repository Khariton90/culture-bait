import { Product } from '../../model'
import styles from './styles.module.scss'
import { useAppSelector } from '@/shared/hooks'
import { ReactNode } from 'react'

interface Props {
	product: Product
	removeElementSlot?: ReactNode
	controlsElementSlot?: ReactNode
}

export function VerticalProductCard({
	product,
	removeElementSlot,
	controlsElementSlot,
}: Props): JSX.Element {
	const { itemsMap } = useAppSelector(({ CART_TAG }) => CART_TAG)

	const productInCart = itemsMap[product.id]

	if (!productInCart) {
		return <></>
	}

	return (
		<article className={styles.item}>
			{removeElementSlot}
			<div className={styles.card}>
				<picture className={styles.picture}>
					<source src={product.img} />

					<img src={product.img} />
				</picture>
				<div className={styles.text}>
					<h3 className={styles.cartTitle}>{product.title}</h3>
					<p className={`${styles.description} clamp`}>{product.description}</p>
				</div>
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.total}>
					<b>{product.price * productInCart.qty} ₽</b>
				</div>
				{controlsElementSlot || (
					<div className='smallGrey'>{productInCart.qty} шт.</div>
				)}
			</div>
		</article>
	)
}
