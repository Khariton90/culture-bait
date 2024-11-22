import { ProductId, ProductInCart } from '@/entities/Product'

export interface ItemsMap {
	[key: ProductId]: ProductInCart
}
