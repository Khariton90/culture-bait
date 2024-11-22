import { ProductCard, useFetchProductsQuery } from '@/entities'
import { AddToWishlistButton } from '@/features'
import { ReactNode } from 'react'
import { AddToCart } from '@/features/Cart'
import styles from './styles.module.scss'

interface BaseProductListProps {
	sortSlot: ReactNode
}

export function BaseProductList({
	sortSlot,
}: BaseProductListProps): JSX.Element {
	const { data: productList } = useFetchProductsQuery()

	return (
		<section className={styles.base}>
			{sortSlot}
			<div className={styles.products}>
				{productList?.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						wishSlot={<AddToWishlistButton id={product.id} />}
						addToCardSlot={<AddToCart product={product} />}
					/>
				))}
			</div>
		</section>
	)
}
