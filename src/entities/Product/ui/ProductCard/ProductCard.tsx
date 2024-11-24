import ratingIcon from '@/shared/images/icons/rating.svg'
import { Product, RibbonList } from '@/entities'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	product: Product
	wishSlot: ReactNode
	addToCardSlot: ReactNode
}

export function ProductCard({
	product,
	wishSlot,
	addToCardSlot,
}: Props): JSX.Element {
	return (
		<article className={styles.card}>
			<Link className={styles.link} to={`/catalog/${product.code}`}></Link>
			<div className={styles.top}>
				<RibbonList
					isNew={product.isNew}
					isBestSeller={product.isBestSeller}
					onSale={product.onSale}
					clearance={product.clearance}
				/>
				<figure className={styles.figure}>
					<img className='productImage' src={product.img} alt={product.title} />
				</figure>

				<div className={styles.feed}>
					<div className={styles.rate}>
						<img src={ratingIcon} alt='Рейтинг' /> <span>3.5</span>
					</div>
					<div>{wishSlot}</div>
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

			<p className='productDescription clamp'>{product.description}</p>

			<div className={styles.panel}>
				<div className={styles.rowBetween}>
					<span className={styles.smallGrey}>Цена за штуку</span>
					<h4>{product.price} ₽</h4>
				</div>

				<div className={styles.rowBetween}>{addToCardSlot}</div>
			</div>
		</article>
	)
}
