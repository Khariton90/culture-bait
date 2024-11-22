import cartIcon from '@/shared/assets/cart.svg'
import styles from './styles.module.scss'
import { MouseEvent, useState } from 'react'
import { useAppSelector } from '@/shared/hooks'

export function GoToCart(): JSX.Element {
	const total = useAppSelector(({ CART_TAG }) => CART_TAG.total)

	const [, setIsOpen] = useState(false)

	const handleToggleCart = (evt: MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault()
		setIsOpen(prev => !prev)
	}

	return (
		<a href='#' className={styles.btn} onClick={handleToggleCart}>
			{total ? <div className={styles.badge}>{total} ₽</div> : null}
			<img src={cartIcon} alt='Корзина' />
		</a>
	)
}
