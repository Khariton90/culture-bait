import { Product, ProductCard } from '@/entities'
import { AddToWishlistButton } from '@/features'
import styles from './styles.module.scss'

interface BaseProductListProps {
	products: Product[]
}

export function BaseProductList({
	products,
}: BaseProductListProps): JSX.Element {
	return (
		<div className={styles.products}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					wishSlot={<AddToWishlistButton />}
				/>
			))}
		</div>
	)
}
