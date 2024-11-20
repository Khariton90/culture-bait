import { Product, ProductCard, useFetchProductsQuery } from '@/entities'
import { AddToWishlistButton } from '@/features'
import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { AddToCart } from '@/features/Cart'

interface BaseProductListProps {
	products?: Product[]
	sortSlot: ReactNode
}

export function BaseProductList({
	sortSlot,
}: BaseProductListProps): JSX.Element {
	const { data: productList, isLoading } = useFetchProductsQuery(5)

	//TODO

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div>
			{sortSlot}
			<div className={styles.products}>
				{productList &&
					productList.map(product => (
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
