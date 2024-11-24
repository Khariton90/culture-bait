import { ProductInCart, VerticalProductCard } from '@/entities/Product'
import { mapToProductIds, useGetProductsByIdsQuery } from '@/entities'
import { ControlsCart, RemoveFromCart } from '@/features'
import { useLocation } from 'react-router-dom'
import { AppRoute } from '@/shared/types'
import styles from './styles.module.scss'

type Props = {
	products: ProductInCart[]
}

export function VerticalProductList({ products }: Props): JSX.Element {
	const { data: productList } = useGetProductsByIdsQuery({
		productIds: mapToProductIds(products),
	})
	const { pathname } = useLocation()

	if (!productList) {
		return (
			<div className={styles.cart}>
				<h2>Ой Ошибка...</h2>
			</div>
		)
	}

	return (
		<div className={styles.body}>
			{productList.map(product => (
				<section key={product.id} className={styles.list}>
					{pathname !== AppRoute.Checkout ? (
						<VerticalProductCard
							product={product}
							removeElementSlot={<RemoveFromCart id={product.id} />}
							controlsElementSlot={
								<ControlsCart product={product} size='small' />
							}
						/>
					) : (
						<VerticalProductCard product={product} />
					)}
				</section>
			))}
		</div>
	)
}
