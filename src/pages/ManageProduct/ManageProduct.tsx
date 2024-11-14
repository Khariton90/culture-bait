import { LayoutFooter } from '@/widgets'
import { CheckRadio } from '@/shared/ui'
import { TextField } from '@mui/material'
import { ProductPreview } from './ProductPreview/ProductPreview'
import styles from './styles.module.scss'

export function ManageProduct(): JSX.Element {
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

						<form className={styles.form}>
							<div className={styles.left}>
								<ProductPreview />
							</div>

							<div className={styles.right}>
								<TextField
									fullWidth
									label='Наименование товара'
									id='fullWidth'
								/>

								<TextField fullWidth label='Категория товара' id='fullWidth' />
								<TextField fullWidth label='Цена товара' id='fullWidth' />
								<TextField fullWidth label='Код товара' id='fullWidth' />

								<label htmlFor='description'>
									<span>Описание товара</span>
									<br />
									<textarea
										className={styles.textarea}
										cols={60}
										rows={10}
										id='description'
									/>
								</label>
							</div>

							<div>
								<h4>Лучшие предложения</h4>
								<div className={styles.bestOffers}>
									<CheckRadio
										key={''}
										value={'Распродажа'}
										name={'Распродажа'}
										type={'checkbox'}
									/>
									<CheckRadio
										key={''}
										value={'Акция'}
										name={'Распродажа'}
										type={'checkbox'}
									/>
									<CheckRadio
										key={''}
										value={'Новинка'}
										name={'Распродажа'}
										type={'checkbox'}
									/>
									<CheckRadio
										key={''}
										value={'Распродажа'}
										name={'Распродажа'}
										type={'checkbox'}
									/>
								</div>
							</div>
						</form>
					</div>
				</section>
			</main>
			<LayoutFooter />
		</div>
	)
}
