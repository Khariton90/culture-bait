import cartIcon from '@/shared/assets/cart.svg'
import styles from './styles.module.scss'
import { MouseEvent } from 'react'
import { useAppSelector } from '@/shared/hooks'

interface Props {
	toggleCart: () => void
}

export function GoToCart({ toggleCart }: Props): JSX.Element {
	const total = useAppSelector(({ cartSlice }) => cartSlice.total)

	const handleToggleCart = (evt: MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault()
		toggleCart()
	}

	return (
		<a href='#' className={styles.btn} onClick={handleToggleCart}>
			{total ? <div className={styles.badge}>{total} ₽</div> : null}
			<img src={cartIcon} alt='Корзина' />
		</a>
	)
}
