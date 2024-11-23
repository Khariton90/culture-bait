import { Button } from '@mui/material'
import styles from './styles.module.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

interface Props {
	total: number
}

export function AddToOrder({ total }: Props): JSX.Element {
	return (
		<div className={styles.box}>
			<div className={styles.info}>
				<span>Сумма заказа</span>
				<span>{total} ₽</span>
			</div>
			<Button
				variant='contained'
				type='button'
				size='large'
				sx={{ color: '#FFF' }}
				fullWidth
				endIcon={<ArrowRightAltIcon />}
			>
				Перейти к оформлению
			</Button>
		</div>
	)
}
