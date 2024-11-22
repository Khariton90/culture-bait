import { ProductCard, useFetchProductsQuery } from '@/entities'
import { AddToWishlistButton, Filter, Sorting, AddToCart } from '@/features'
import styles from './styles.module.scss'

export function BaseProductList(): JSX.Element {
	const { data: productList } = useFetchProductsQuery()

	return (
		<section className={styles.base}>
			<div className='container'>
				<section className={styles.catalog}>
					<Filter />
					<div>
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
					</div>
				</section>
			</div>
		</section>
	)
}
