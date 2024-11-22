import {
	LayoutHeader,
	LayoutNavigation,
	BaseProductList,
	LayoutFooter,
} from '@/widgets'
import { Cart } from '@/entities'
import { Filter } from '@/features/Filter'
import { Sorting } from '@/features'
import { useState } from 'react'
import { GoToCart } from '@/features/Cart'
import './Home.scss'

export function Home(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)

	const toggleCart = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className='page'>
			<div className='container'>
				<LayoutHeader
					rightSlot={
						<LayoutNavigation
							goToCartSlot={<GoToCart toggleCart={toggleCart} />}
						/>
					}
				/>
				<main className='content'>
					<Filter />
					<BaseProductList sortSlot={<Sorting />} />
				</main>
			</div>
			<Cart toggleCart={toggleCart} isOpen={isOpen} />
			<LayoutFooter />
		</div>
	)
}
