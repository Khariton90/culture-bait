import { ProductInCart } from '@/entities/Product'

export function mapToProductIds(products: ProductInCart[]): number[] {
	return products.map(item => item.id)
}
