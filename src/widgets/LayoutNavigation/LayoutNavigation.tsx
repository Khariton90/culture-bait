import { Link } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import cartIcon from '@/shared/assets/cart.svg'
import styles from './styles.module.scss'

export function LayoutNavigation(): JSX.Element {
	return (
		<nav className={styles.navigation}>
			<Link href='#' className={styles.headerLink} color='primary'>
				<FavoriteBorderIcon fontSize='large' />
			</Link>
			<Link href='#' className={styles.headerLink} color='primary'>
				<PersonOutlineIcon fontSize='large' />
			</Link>
			<Link href='#' className={styles.headerCard} color='primary'>
				<img src={cartIcon} alt='Корзина' />
			</Link>
		</nav>
	)
}
