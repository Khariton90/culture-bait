import { ProductCard, useFetchProductsQuery } from '@/entities'
import { AddToWishlistButton, Filter, Sorting } from '@/features'
import { AddToCart } from '@/features/Cart'
import styles from './styles.module.scss'

export function BaseProductList(): JSX.Element {
	const { data: productList } = useFetchProductsQuery()

	return (
		<>
			<Filter />
			<section className={styles.base}>
				<Sorting />
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
		</>
	)
}
