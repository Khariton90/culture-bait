import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TagsApi } from './tags.enum'

const BASE_URL = 'http://localhost:3000/api'

export const baseApi = createApi({
	tagTypes: [TagsApi.CART_TAG],
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: () => ({}),
})
