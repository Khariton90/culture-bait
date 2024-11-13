import styles from './styles.module.scss'
import cn from 'classnames'

enum Promotion {
	sale = 'Распродажа',
	hits = 'Хит продаж',
	newItems = 'Новинка',
	stock = 'Акция',
}

interface Props {
	type: 'newItems' | 'stock' | 'sale' | 'hits'
}

export function RibbonItem({ type }: Props): JSX.Element {
	return (
		<div className={cn(styles.ribbon, styles[type])}>{Promotion[type]}</div>
	)
}
