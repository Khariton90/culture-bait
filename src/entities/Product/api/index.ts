import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../model'

//TODO ENV
const BASE_URL = 'http://localhost:3000/api'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['Product'],
	endpoints: builder => ({
		fetchProducts: builder.query<Product[], number>({
			query: (limit: number = 10) => ({
				url: '/product',
			}),
			providesTags: ['Product'],
		}),
	}),
})

export const { useFetchProductsQuery } = productApi
