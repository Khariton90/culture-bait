import ratingIcon from '@/shared/images/icons/rating.svg'
import { Button } from '@mui/material'
import { Product, RibbonList } from '@/entities'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
	product: Product
	wishSlot: ReactNode
}

export function ProductCard({ product, wishSlot }: Props): JSX.Element {
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
				<span className={styles.code}>Код: {product.code}</span>
			</div>
			<p className='productDescription'>{product.description}</p>

			<div className={styles.panel}>
				<div className={styles.rowBetween}>
					<span className={styles.code}>Цена за штуку</span>
					<h4>{product.price} ₽</h4>
				</div>
				<Button
					sx={{ color: '#fff' }}
					color='primary'
					type={'button'}
					variant='contained'
					size='large'
				>
					В корзину
				</Button>
			</div>
		</article>
	)
}
