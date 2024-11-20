import { AppStore } from '@/app/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type AppDispatch = AppStore['dispatch']
export type State = AppStore['getState']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<State> = useSelector
