import { ProductInCart } from '@/entities/Product'
import styles from './styles.module.scss'
import { useGetProductsByIdsQuery } from '../api'

function mapToProductIds(products: ProductInCart[]): number[] {
	return products.map(item => item.id)
}

type Props = {
	products: ProductInCart[]
}

export function FilledCart({ products }: Props): JSX.Element {
	const { data: productList } = useGetProductsByIdsQuery({
		productIds: mapToProductIds(products),
	})

	return (
		<div className={styles.cart}>
			<section className={styles.empty}>
				<ul>
					{productList &&
						productList.map(item => <li key={item.id}>{item.title}</li>)}
				</ul>
			</section>
		</div>
	)
}
