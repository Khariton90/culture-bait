import { Badge, Drawer, Link } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import styles from './styles.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ReactNode, useState } from 'react'
import { useAppSelector } from '@/shared/hooks'
import { GoToCart } from '@/features'

interface Props {
	orderPreviewSlot: ReactNode
}

export function LayoutNavigation({ orderPreviewSlot }: Props): JSX.Element {
	const wishListProducts = useAppSelector(({ wishList }) => wishList.products)
	const [isOpen, setIsOpen] = useState(false)

	const toggleCart = () => {
		setIsOpen(prev => !prev)
	}

	const positiveValues = Object.values(wishListProducts).filter(item => item)
	const length = positiveValues.length

	return (
		<>
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
					<li className={styles.item}>
						<GoToCart toggleCart={toggleCart} />
					</li>
				</ul>
			</nav>

			<Drawer
				sx={{ position: 'relative' }}
				anchor={'right'}
				open={isOpen}
				onClose={toggleCart}
			>
				{orderPreviewSlot}
			</Drawer>
		</>
	)
}
