import { useGetProductItemQuery } from '@/entities'
import { AddToCart, AddToWishlistButton } from '@/features'
import { BasicTabs } from '@/widgets'
import { Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/shared/types'
import styles from './styles.module.scss'

interface Props {
	id: string
}

export function ProductDetails({ id }: Props): JSX.Element {
	const { data: product } = useGetProductItemQuery(id)

	//TODO
	if (!product) {
		return (
			<main className={styles.main}>
				Ошибка...
				<Link to={AppRoute.Home}>Вернуться</Link>
			</main>
		)
	}

	return (
		<div className='container'>
			<section className={styles.main}>
				<div className={styles.breadCrumps}>
					<Breadcrumbs aria-label='breadcrumb'>
						<Link color='inherit' to={AppRoute.Home}>
							Главная
						</Link>
						<Typography sx={{ color: 'text.primary' }}>
							{product.title}
						</Typography>
					</Breadcrumbs>
				</div>
				<section className={styles.left}>
					<div className={styles.preview}>
						<div className={styles.picture}>
							<img
								className={styles.image}
								src={product.img}
								alt={product.title}
							/>
						</div>
					</div>
				</section>
				<section className={styles.right}>
					<div className={styles.head}>
						<h1 className={styles.title}>{product.title}</h1>
						<h2 className={styles.subTitle}>{product.title}</h2>
					</div>
					<div className={styles.controls}>
						<div className={styles.code}>
							<span>
								<b>Код: {product.code}</b>
							</span>
						</div>
						<div className={styles.wishlist}>
							<AddToWishlistButton id={product.id} />
							<span>
								<b>В избранное</b>
							</span>
						</div>
					</div>
					<div className={styles.tabs}>
						<BasicTabs description={product.description} />
					</div>
					<div className={styles.bottom}>
						<AddToCart size='large' product={product} />
					</div>
				</section>
			</section>
		</div>
	)
}
