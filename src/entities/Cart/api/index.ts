import { Product, ProductId } from '@/entities/Product'
import { baseApi } from '@/shared/api/baseApi'

export const cartApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getProductsByIds: build.query<Product[], { productIds: ProductId[] }>({
			query: productIds => ({
				url: `/product/cart`,
				method: 'POST',
				body: productIds,
			}),
		}),
		getProductItem: build.query<Product, string | void>({
			query: id => ({
				url: `/product/${id}`,
				method: 'GET',
			}),
		}),
	}),
})

export const { useGetProductsByIdsQuery, useGetProductItemQuery } = cartApi
