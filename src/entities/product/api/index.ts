import { api } from '../../../app/store/index'
import { AppDispatch, State } from '@/shared/hooks'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

export const fetchProducts = createAsyncThunk<
	void,
	void,
	{ dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('product/findAll', async () => {
	const { data } = await api.get('/product')

	console.log(data)
})
