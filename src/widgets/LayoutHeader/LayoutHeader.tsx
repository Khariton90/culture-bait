import { IconButton, InputBase, Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import SetMealIcon from '@mui/icons-material/SetMeal'
import styles from './styles.module.scss'
import marker from '@/shared/assets/marker.svg'
import { ReactNode } from 'react'
import { LayoutSmartLogo } from '@/shared/ui'

interface Props {
	rightSlot: ReactNode
}

export function LayoutHeader({ rightSlot }: Props): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.headerTop}>
				<div className={styles.left}>
					<nav className={styles.nav}>
						<ul className={styles.navList}>
							<li className={styles.navItem}>
								<a href='/' className={styles.navLink}>
									Доставка
								</a>
							</li>
							<li className={styles.navItem}>
								<a href='/' className={styles.navLink}>
									Программа лояльности
								</a>
							</li>
							<li className={styles.navItem}>
								<a href='/' className={styles.navLink}>
									О нас
								</a>
							</li>
							<li className={styles.navItem}>
								<a href='/' className={styles.navLink}>
									<span>Телефон: </span>
									<b>333-11-11 </b>
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className={styles.right}>
					<a className={styles.location} href='/'>
						<img src={marker} alt='location' />
						&nbsp;
						<span>г. СПб, Приморский р-н</span>
					</a>
				</div>
			</div>
			<div className={styles.headerBottom}>
				<div className={styles.catalog}>
					<LayoutSmartLogo />
					<Button
						color='primary'
						title='Каталог'
						type={'button'}
						variant='contained'
						startIcon={<SetMealIcon sx={{ color: '#FFF' }} />}
					>
						<Typography sx={{ color: '#FFF' }} fontSize={14}>
							Каталог
						</Typography>
					</Button>
					<div className={styles.search}>
						<InputBase placeholder='Поиск' fullWidth />
						<IconButton>
							<SearchIcon color='primary' />
						</IconButton>
					</div>
				</div>

				<div>{rightSlot}</div>
			</div>
		</header>
	)
}
