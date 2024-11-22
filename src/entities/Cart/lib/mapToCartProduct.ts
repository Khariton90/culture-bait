import { Product, ProductInCart } from '@/entities/Product'

export function mapToCartProduct(product: Product): ProductInCart {
	return {
		id: product.id,
		qty: 1,
		price: product.price,
	}
}
