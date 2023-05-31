import { globalVariables } from '@globalVariables'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'

import { useAppDispatch } from './useAppDispatch'
import { useAppSelector } from './useAppSelector'

/**
 * Хук получения всех новостей
 */
export const useGetNews = () => {
    const dispatch = useAppDispatch()

    const { skip } = useAppSelector(({ news }) => news)

    const limit = globalVariables.limit

    const getNews = (defaultSkip: number = skip) => {
        dispatch(NewsServices.getNews({ limit, skip: defaultSkip }))
    }

    return { getNews }
}
