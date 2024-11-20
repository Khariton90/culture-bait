import cartIcon from '@/shared/assets/cart.svg'
import styles from './styles.module.scss'
import { MouseEvent } from 'react'

interface Props {
	toggleCart: () => void
}

export function GoToCart({ toggleCart }: Props): JSX.Element {
	const handleToggleCart = (evt: MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault()
		toggleCart()
	}

	return (
		<a href='#' className={styles.headerCard} onClick={handleToggleCart}>
			<img src={cartIcon} alt='Корзина' />
		</a>
	)
}
