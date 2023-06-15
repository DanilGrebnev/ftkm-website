import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../redux/store'

/**
 * Типизированный хук useSelector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
