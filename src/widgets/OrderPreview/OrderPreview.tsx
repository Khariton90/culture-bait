import { useAppSelector } from '@/shared/hooks'
import { EmptyCart, FilledCart } from '@/entities'
import { AddToOrder } from '@/features/Order'
import styles from './styles.module.scss'

export function OrderPreview(): JSX.Element {
	const { total, itemsMap } = useAppSelector(({ CART_TAG }) => CART_TAG)
	const values = Object.values(itemsMap)

	if (!values.length) {
		return <EmptyCart />
	}

	return (
		<div className={styles.cart}>
			<FilledCart products={values} />
			<AddToOrder total={total} />
		</div>
	)
}
