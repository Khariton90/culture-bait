import { BaseProductList } from '@/widgets'
import styles from './styles.module.scss'

export function HomePage(): JSX.Element {
	return (
		<section className={styles.home}>
			<BaseProductList />
		</section>
	)
}
