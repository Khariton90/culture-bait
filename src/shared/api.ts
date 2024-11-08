import axios, { AxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3000/api'
const TIMEOUT_REQUEST = 5000

export function createApi(): AxiosInstance {
	const api = axios.create({
		baseURL: BASE_URL,
		timeout: TIMEOUT_REQUEST,
	})

	return api
}
