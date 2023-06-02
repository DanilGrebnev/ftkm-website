import { NewsServices } from '@redux/slices/news/NewsServicesThunk'

import { useAppDispatch } from './useAppDispatch'

export const useGetOneNews = () => {
    const dispatch = useAppDispatch()

    const getOneNews = (_id: string) => {
        dispatch(NewsServices.getOneNews(_id))
    }

    return { getOneNews }
}
