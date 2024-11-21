import { Product, ProductInCart } from '@/entities/Product'
import styles from './styles.module.scss'
import { useGetProductsByIdsQuery } from '../api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ButtonGroup, Button } from '@mui/material'
import { decQty, incQty, removeItemFromCart } from '@/entities'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

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

	const { total, itemsMap } = useAppSelector(({ CART_TAG }) => CART_TAG)

	const dispatch = useAppDispatch()

	const incQuantity = (product: Product) => {
		dispatch(incQty(product.id))
	}

	const decQuantity = (product: Product) => {
		dispatch(decQty(product.id))
	}

	if (!productList) {
		return (
			<div className={styles.cart}>
				<h2>Ой Ошибка...</h2>
			</div>
		)
	}

	return (
		<div className={styles.cart}>
			<section className={styles.filled}>
				<h2>
					{productList.length} товара на {total} ₽
				</h2>

				{productList.map(product => (
					<section key={product.id} className={styles.list}>
						<article className={styles.item}>
							<div className={styles.remove}>
								<Button
									className={styles.remove}
									onClick={() => dispatch(removeItemFromCart(product.id))}
								>
									<CloseOutlinedIcon />
								</Button>
							</div>

							<div className={styles.card}>
								<picture className={styles.picture}>
									<source src={product.img} />

									<img src={product.img} />
								</picture>

								<div className={styles.text}>
									<h3 className={styles.cartTitle}>{product.title}</h3>
									<p className={`${styles.description} clamp`}>
										{product.description}
									</p>
								</div>
							</div>

							<div className={styles.cardFooter}>
								<div className={styles.total}>
									<b>{product.price * itemsMap[product.id]?.qty} ₽</b>
								</div>
								<div className={styles.controls}>
									<ButtonGroup
										size='small'
										aria-label='small outlined button group'
									>
										<Button
											disabled={product.qty <= 0}
											onClick={() => decQuantity(product)}
										>
											-
										</Button>
										<Button disabled>{itemsMap[product.id]?.qty}</Button>
										<Button
											disabled={itemsMap[product.id]?.qty >= product.qty}
											onClick={() => incQuantity(product)}
										>
											+
										</Button>
									</ButtonGroup>
								</div>
							</div>
						</article>
					</section>
				))}
			</section>
		</div>
	)
}
