import { Button } from '@mui/material'
import styles from './styles.module.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '@/shared/types'

interface Props {
	total: number
}

export function AddToOrder({ total }: Props): JSX.Element {
	const navigate = useNavigate()

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
				onClick={() => navigate(AppRoute.Checkout)}
			>
				Перейти к оформлению
			</Button>
		</div>
	)
}
