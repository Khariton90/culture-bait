import {
	LayoutHeader,
	LayoutNavigation,
	BaseProductList,
	LayoutFooter,
} from '@/widgets'
import { Cart, Product } from '@/entities'
import product1 from '@/shared/assets/product1.jpg'
import product2 from '@/shared/assets/product2.jpg'
import product3 from '@/shared/assets/product3.jpg'
import './Home.scss'
import { Filter } from '@/features/Filter'
import { Sorting } from '@/features'
import { useState } from 'react'
import { GoToCart } from '@/features/Cart'

const mockProducts: Product[] = [
	{
		id: 1,
		img: product1,
		title: 'Катушка',
		description: 'Lorem ipsum dolor sit ',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 5,
		categoryId: 0,
	},
	{
		id: 2,
		img: product2,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 3,
		categoryId: 0,
	},
	{
		id: 3,
		img: product1,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 4,
		categoryId: 0,
	},
	{
		id: 4,
		img: product3,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 3,
		categoryId: 0,
	},
	{
		id: 5,
		img: product1,
		title: 'Катушка',
		description: 'Lorem ipsum dolor sit ',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 4,
		categoryId: 0,
	},
	{
		id: 6,
		img: product2,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 5,
		categoryId: 0,
	},
	{
		id: 7,
		img: product1,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 15,
		categoryId: 0,
	},
	{
		id: 8,
		img: product3,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
		isNew: false,
		isBestSeller: false,
		onSale: false,
		clearance: false,
		qty: 15,
		categoryId: 0,
	},
]

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
					<BaseProductList products={mockProducts} sortSlot={<Sorting />} />
				</main>
			</div>
			<Cart toggleCart={toggleCart} isOpen={isOpen} />
			<LayoutFooter />
		</div>
	)
}
