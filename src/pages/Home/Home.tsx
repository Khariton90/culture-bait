import { LayoutHeader, LayoutNavigation, BaseProductList } from '@/widgets'
import { Product } from '@/entities'
import product1 from '@/shared/assets/product1.jpg'
import product2 from '@/shared/assets/product2.jpg'
import product3 from '@/shared/assets/product3.jpg'
import './Home.scss'

const mockProducts: Product[] = [
	{
		id: 1,
		img: product1,
		title: 'Катушка',
		description: 'Lorem ipsum dolor sit ',
		price: 2400,
		code: 505505,
	},
	{
		id: 2,
		img: product2,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
	},
	{
		id: 3,
		img: product1,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
	},
	{
		id: 4,
		img: product3,
		title: 'Катушка',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis',
		price: 2400,
		code: 505505,
	},
]

export function Home(): JSX.Element {
	return (
		<div className='page'>
			<div className='container'>
				<LayoutHeader rightSlot={<LayoutNavigation />} />
				<main className='content'>
					<div className='filter'></div>
					<BaseProductList products={mockProducts} />
				</main>
			</div>
		</div>
	)
}
