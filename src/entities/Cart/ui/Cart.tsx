import { Drawer } from '@mui/material'
import image from '@/shared/images/empty-cart..svg'
import styles from './styles.module.scss'

interface Props {
	toggleCart: () => void
	isOpen: boolean
}

export function Cart({ toggleCart, isOpen }: Props): JSX.Element {
	return (
		<Drawer anchor={'right'} open={isOpen} onClose={toggleCart}>
			<div className={styles.cart}>
				<section className={styles.empty}>
					<img src={image} className={styles.image} alt='Корзина пуста' />
					<h2 className={styles.title}>Пока тут пусто</h2>
					<span className={styles.smallGrey}>Добавьте покупки в заказ</span>
					<br />
					<span className={styles.smallGrey}>
						А мы доставим ваш заказ от 2000р
					</span>
				</section>
			</div>
		</Drawer>
	)
}
