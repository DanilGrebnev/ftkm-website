import { globalVariables } from '@globalVariables'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'

import { useAppDispatch } from './useAppDispatch'
import { useGetNewsStore } from './useGetNewsStore'

/**
 * Хук получения всех новостей
 * возрвщает функцию, которая получает все новости
 * и устанавливает их в redux хранилище
 */
export const useGetNews = () => {
    const dispatch = useAppDispatch()

    const { skip } = useGetNewsStore()

    const limit = globalVariables.limit

    const getNews = (defaultSkip: number = skip) => {
        dispatch(NewsServices.getNews({ limit, skip: defaultSkip }))
    }

    return { getNews }
}
