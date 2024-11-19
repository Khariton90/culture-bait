import { Link } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import cartIcon from '@/shared/assets/cart.svg'
import styles from './styles.module.scss'
import { useAppSelector } from '@/shared/hooks'

export function LayoutNavigation(): JSX.Element {
	const length = useAppSelector(
		({ productSlice }) => productSlice.products.length
	)

	return (
		<nav className={styles.navigation}>
			{length}
			<Link href='#' className={styles.headerLink} color='primary'>
				<FavoriteBorderIcon fontSize='medium' />
			</Link>
			<Link href='#' className={styles.headerLink} color='primary'>
				<PersonOutlineIcon fontSize='medium' />
			</Link>
			<Link href='#' className={styles.headerCard} color='primary'>
				<img src={cartIcon} alt='Корзина' />
			</Link>
		</nav>
	)
}
