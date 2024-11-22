import { AppRoute } from '@/shared/types'
import { createAction } from '@reduxjs/toolkit'

export const redirectToRoute = createAction<AppRoute | string>(
	'data/redirectToRoute'
)
