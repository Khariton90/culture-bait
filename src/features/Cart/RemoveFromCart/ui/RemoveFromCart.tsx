import { ProductId, removeItemFromCart } from '@/entities'
import { useAppDispatch } from '@/shared/hooks'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Button } from '@mui/material'
import styles from './styles.module.scss'

interface Props {
	id: ProductId
}

export function RemoveFromCart({ id }: Props): JSX.Element {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.remove}>
			<Button onClick={() => dispatch(removeItemFromCart(id))}>
				<CloseOutlinedIcon />
			</Button>
		</div>
	)
}
