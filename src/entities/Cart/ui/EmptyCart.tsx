import image from '@/shared/images/empty-cart..svg'
import styles from './styles.module.scss'

export function EmptyCart(): JSX.Element {
	return (
		<div className={styles.emptyCart}>
			<section className={styles.empty}>
				<img src={image} className={styles.image} alt='Корзина пуста' />
				<h2 className={styles.title}>Пока тут пусто</h2>
				<span className={styles.smallGrey}>Добавьте покупки в заказ</span>
				<br />
				<span className={styles.smallGrey}>
					А мы доставим ваш заказ от 2000 ₽
				</span>
			</section>
		</div>
	)
}
