import { Product } from '@/entities/Product'
import { baseApi } from '@/shared/api/baseApi'

export const productApi = baseApi.injectEndpoints({
	endpoints: build => ({
		fetchProducts: build.query<Product[], number | void>({
			query: (limit: number = 8) => ({
				url: `/product`,
				method: 'GET',
				params: { limit },
			}),
		}),
	}),
})

export const { useFetchProductsQuery } = productApi
