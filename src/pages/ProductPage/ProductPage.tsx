import { useParams } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@mui/material'
import { BasicTabs } from './BasicTabs'
import { AddToCart } from '@/features/Cart'
import { AddToWishlistButton } from '@/features'
import styles from './styles.module.scss'
import image from '@/shared/assets/product1.jpg'

//TODO
const product = {
	id: 22,
	img: 'http://localhost:3000/product1.jpg',
	title: 'Фидер',
	description:
		'Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu',
	price: 20000,
	code: 505527,
	qty: 15,
	categoryId: 1,
	isNew: false,
	isBestSeller: false,
	onSale: true,
	clearance: false,
}

export function ProductPage(): JSX.Element {
	const { id } = useParams()
	return (
		<main className={styles.main}>
			<div className={styles.breadCrumps}>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link underline='hover' color='inherit' href='/'>
						Главная
					</Link>
					<Typography sx={{ color: 'text.primary' }}>{id}</Typography>
				</Breadcrumbs>
			</div>
			<section className={styles.left}>
				<div className={styles.preview}>
					<div className={styles.picture}>
						<img className={styles.image} src={image} alt='Товар' />
					</div>
				</div>
			</section>
			<section className={styles.right}>
				<div className={styles.head}>
					<h1 className={styles.title}>Спиннинг</h1>
					<h2 className={styles.subTitle}>Спиннинг Shimano</h2>
				</div>

				<div className={styles.controls}>
					<div className={styles.code}>
						<span>
							<b>Код: 505505</b>
						</span>
					</div>

					<div className={styles.wishlist}>
						<AddToWishlistButton />
						<span>
							<b>В избранное</b>
						</span>
					</div>
				</div>

				<div className={styles.tabs}>
					<BasicTabs />
				</div>

				<div className={styles.bottom}>
					<AddToCart size='large' product={product} />
				</div>
			</section>
		</main>
	)
}
