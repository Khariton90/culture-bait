import { useAppSelector } from '@/shared/hooks'
import { AddToOrder } from '@/features/Order'
import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { formatGoods } from '@/entities/Cart/lib/formatGoods'
import { EmptyCart } from '@/entities'

interface Props {
	listSlot: ReactNode
}

export function OrderPreview({ listSlot }: Props): JSX.Element {
	const { total, itemsMap } = useAppSelector(({ CART_TAG }) => CART_TAG)
	const products = Object.values(itemsMap)

	if (!products.length) {
		return <EmptyCart />
	}

	return (
		<div className={styles.orderPreview}>
			<h2>{`${formatGoods(products.length)}  на ${total} ₽`}</h2>
			{listSlot}
			<AddToOrder total={total} />
		</div>
	)
}
