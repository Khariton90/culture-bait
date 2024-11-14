import { RibbonItem } from './RIbbonItem'
import styles from './styles.module.scss'

interface Props {
	isNew?: boolean
	isBestSeller?: boolean
	onSale?: boolean
	clearance?: boolean
}

export function RibbonList({
	isNew,
	isBestSeller,
	onSale,
	clearance,
}: Props): JSX.Element {
	return (
		<div className={styles.ribbonBox}>
			{isNew && <RibbonItem type={'newItems'} />}
			{isBestSeller && <RibbonItem type={'hits'} />}
			{onSale && <RibbonItem type={'stock'} />}
			{clearance && <RibbonItem type={'sale'} />}
		</div>
	)
}
