import styles from './styles.module.scss'

export function ManageProductPage(): JSX.Element {
	return (
		<div className={styles.page}>
			<div className='container'>
				<header className={styles.header}></header>
			</div>
			<main className={styles.content}>
				<section className={styles.card}>
					<div className='container'>
						<div className={styles.title}>
							<h1>Новый товар</h1>
							<nav className={styles.breadCrumbs}>
								<ul className={styles.breadCrumbsList}>
									<li>Вход</li>
									<li>Товары</li>
									<li>Новый товар</li>
								</ul>
							</nav>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
