import { Badge, Link } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import styles from './styles.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ReactNode } from 'react'
import { useAppSelector } from '@/shared/hooks'

type Props = {
	goToCartSlot: ReactNode
}
export function LayoutNavigation({ goToCartSlot }: Props): JSX.Element {
	const wishListProducts = useAppSelector(({ wishList }) => wishList.products)
	const positiveValues = Object.values(wishListProducts).filter(item => item)
	const length = positiveValues.length

	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href='#' className={styles.link} color='primary'>
						<PersonOutlineIcon fontSize='medium' />
					</Link>
				</li>
				<li className={styles.item}>
					<Badge badgeContent={length} color='primary' variant='standard'>
						<Link href='#' className={styles.link} color='primary'>
							<FavoriteBorderIcon fontSize='medium' />
						</Link>
					</Badge>
				</li>
				<li className={styles.item}>{goToCartSlot}</li>
			</ul>
		</nav>
	)
}
