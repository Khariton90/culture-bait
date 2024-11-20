import { Product } from '@/entities/Product'
import { baseApi } from '@/shared/api/baseApi'

export const cartApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getProductsByIds: build.query<Product[], { productIds: number[] }>({
			query: productIds => ({
				url: `/product/cart`,
				method: 'POST',
				body: productIds,
			}),
		}),
	}),
})

export const { useGetProductsByIdsQuery } = cartApi
