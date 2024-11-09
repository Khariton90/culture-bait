import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useAppDispatch } from '@/shared/hooks'
import { fetchProducts } from '@/entities/Product/api'
import styles from './style.module.scss'

export function Dashboard(): JSX.Element {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				Header
				<button onClick={() => dispatch(fetchProducts())}>
					Найти продукты
				</button>
			</header>
			<aside className={styles.aside}>
				<List>
					{['Товары', 'Заказы', 'Категории'].map(text => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</aside>
			<main className={styles.dashboard}>
				<div className={styles.dashboardHeader}>dashboardHeader</div>
				<div className={styles.dashboardAnalyses}>
					<div className={styles.analysesItem}>
						<h4>Заказы</h4>
					</div>
					<div className={styles.analysesItem}>
						<h4>Пользователи</h4>
					</div>
					<div className={styles.analysesItem}>
						<h4>Категории</h4>
					</div>
					<div className={styles.analysesItem}>
						<h4>Товары</h4>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>Footer</footer>
		</div>
	)
}
