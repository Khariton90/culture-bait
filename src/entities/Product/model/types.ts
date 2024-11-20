export interface Product {
	id: number
	img: string
	title: string
	description: string
	price: number
	code: number
	qty: number
	isNew: boolean
	isBestSeller: boolean
	onSale: boolean
	clearance: boolean
	categoryId: number
}

export type ProductInCart = Pick<Product, 'id' | 'qty' | 'price'>
