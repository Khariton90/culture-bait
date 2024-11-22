import { BaseProductList } from '@/widgets'
import { Cart } from '@/entities'
import { Filter } from '@/features/Filter'
import { Sorting } from '@/features'
import styles from './styles.module.scss'

export function HomePage(): JSX.Element {
	return (
		<section className={styles.home}>
			<Filter />
			<BaseProductList sortSlot={<Sorting />} />
			<Cart />
		</section>
	)
}
