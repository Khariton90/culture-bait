import cartIcon from '@/shared/assets/cart.svg'
import { useAppSelector } from '@/shared/hooks'
import styles from './styles.module.scss'

interface Props {
	toggleCart: () => void
}

export function GoToCart({ toggleCart }: Props): JSX.Element {
	const total = useAppSelector(({ CART_TAG }) => CART_TAG.total)

	const handleToggleCart = () => {
		toggleCart()
	}

	return (
		<button className={styles.btn} onClick={handleToggleCart}>
			{total ? <div className={styles.badge}>{total} ₽</div> : null}
			<img src={cartIcon} alt='Корзина' />
		</button>
	)
}
