/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootReducer } from '@/app/store/RootReducer'
import { Middleware } from 'redux'
import browserHistory from '../browserHistory'

type Reducer = ReturnType<typeof rootReducer>

export const redirect: Middleware<unknown, Reducer> =
	_state => next => (action: any) => {
		if (action.type === 'data/redirectToRoute') {
			browserHistory.push(action.payload)
		}

		return next(action)
	}
