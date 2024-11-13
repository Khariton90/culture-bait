import { RibbonItem } from './RIbbonItem'
import styles from './styles.module.scss'

interface Props {
	sale?: boolean
	hits?: boolean
	newItems?: boolean
	stock?: boolean
}

export function RibbonList({
	newItems,
	stock,
	hits,
	sale,
}: Props): JSX.Element {
	return (
		<div className={styles.ribbonBox}>
			{newItems && <RibbonItem type={'newItems'} />}
			{hits && <RibbonItem type={'hits'} />}
			{stock && <RibbonItem type={'stock'} />}
			{sale && <RibbonItem type={'sale'} />}
		</div>
	)
}
