import { Navigate, useParams } from 'react-router-dom'
import { AppRoute } from '@/shared/types'
import { ProductDetails } from '@/widgets'

export function ProductPage(): JSX.Element {
	const { id } = useParams()

	if (!id) {
		return <Navigate to={AppRoute.Home} />
	}

	return <ProductDetails id={id} />
}
