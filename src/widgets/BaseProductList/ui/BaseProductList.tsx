import { Product, ProductCard } from '@/entities'
import { AddToWishlistButton } from '@/features'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

interface BaseProductListProps {
	products: Product[]
	sortSlot: ReactNode
}

export function BaseProductList({
	products,
	sortSlot,
}: BaseProductListProps): JSX.Element {
	return (
		<div>
			{sortSlot}
			<div className={styles.products}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						wishSlot={<AddToWishlistButton />}
					/>
				))}
			</div>
		</div>
	)
}
