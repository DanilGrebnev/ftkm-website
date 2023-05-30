import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { setSkip } from '@redux/slices/news/news'

import { useAppDispatch } from './useAppDispatch'

interface IGetNews {
    limit: number
    skip: number
}

export const useGetNews = () => {
    const dispatch = useAppDispatch()

    const getNews = ({ limit, skip }: IGetNews) => {
        dispatch(NewsServices.getNews({ limit, skip }))
        dispatch(setSkip())
    }

    return { getNews }
}
