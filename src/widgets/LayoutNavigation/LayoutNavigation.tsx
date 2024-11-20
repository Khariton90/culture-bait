import { Link } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import styles from './styles.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ReactNode } from 'react'

type Props = {
	goToCartSlot: ReactNode
}

export function LayoutNavigation({ goToCartSlot }: Props): JSX.Element {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href='#' className={styles.link} color='primary'>
						<PersonOutlineIcon fontSize='medium' />
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='#' className={styles.link} color='primary'>
						<FavoriteBorderIcon fontSize='medium' />
					</Link>
				</li>
				<li className={styles.item}>{goToCartSlot}</li>
			</ul>
		</nav>
	)
}
