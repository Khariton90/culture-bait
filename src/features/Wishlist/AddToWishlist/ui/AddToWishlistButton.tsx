import { useState, MouseEvent } from 'react'
import { ProductId } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { toggleWishListProduct } from '@/entities/Wishlist/model'
import { Link } from 'react-router-dom'
import { AppRoute } from '@/shared/types'
import styles from './styles.module.scss'

interface Props {
	id: ProductId
}

export function AddToWishlistButton({ id }: Props): JSX.Element {
	const wishList = useAppSelector(({ wishList }) => wishList.products)
	const [active, setActive] = useState<boolean>(wishList[id])
	const dispatch = useAppDispatch()

	const handleChange = (evt: MouseEvent<HTMLAnchorElement>) => {
		evt.preventDefault()
		setActive(prev => !prev)
		dispatch(toggleWishListProduct(id))
	}

	const fill = active ? '#ff9d0b' : '#e3f4e8'

	return (
		<Link to={AppRoute.Home} className={styles.favorite} onClick={handleChange}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M17.2534 2.93678C16.8343 2.5175 16.3367 2.1849 15.7891 
                                1.95798C15.2414 1.73106 14.6544 1.61426 14.0616 1.61426C13.4688 1.61426 12.8818 1.73106 
                                12.3341 1.95798C11.7865 2.1849 11.2889 2.5175 10.8698 2.93678L10.0001 3.80653L9.13033 
                                2.93678C8.28381 2.09026 7.13569 1.6147 5.93853 1.6147C4.74138 1.6147 3.59325 2.09026 2.74674 
                                2.93678C1.90022 3.7833 1.42465 4.93142 1.42465 6.12858C1.42465 7.32573 1.90022 8.47386 2.74674 
                                9.32037L3.61648 10.1901L10.0001 16.5737L16.3837 10.1901L17.2534 9.32037C17.6727 8.90129 18.0053 
                                8.40371 18.2322 7.85605C18.4591 7.30839 18.5759 6.72139 18.5759 6.12858C18.5759 5.53577 18.4591 
                                4.94876 18.2322 4.40111C18.0053 3.85345 17.6727 3.35586 17.2534 2.93678Z'
					stroke='#51b56d'
					strokeWidth='1.64103'
					strokeLinecap='round'
					strokeLinejoin='round'
					fill={fill}
				></path>
			</svg>
		</Link>
	)
}
