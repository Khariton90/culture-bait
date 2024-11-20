import { Product, ProductCard, useFetchProductsQuery } from '@/entities'
import { AddToWishlistButton } from '@/features'
import { ReactNode } from 'react'
import { AddToCart } from '@/features/Cart'
import styles from './styles.module.scss'

interface BaseProductListProps {
	products?: Product[]
	sortSlot: ReactNode
}

export function BaseProductList({
	sortSlot,
}: BaseProductListProps): JSX.Element {
	const { data: productList } = useFetchProductsQuery()

	return (
		<div>
			{sortSlot}
			<div className={styles.products}>
				{productList?.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						wishSlot={<AddToWishlistButton />}
						addToCardSlot={<AddToCart product={product} />}
					/>
				))}
			</div>
		</div>
	)
}
