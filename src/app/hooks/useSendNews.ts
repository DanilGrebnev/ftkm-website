import { useAppDispatch } from '@hooks/useAppDispatch'
import { INewsData } from '@interfaces/News'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { clearState } from '@redux/slices/news/news'
import { closeModal } from '@redux/slices/news/news'
import { useNavigate } from 'react-router-dom'

export const useSendNews = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const editNews = async (body: INewsData, _id: string) => {
        const res = await dispatch(NewsServices.editNews({ body, _id }))

        if (res.meta.requestStatus === 'rejected') {
            setTimeout(() => {
                dispatch(closeModal())
            }, 3000)

            return
        }

        dispatch(clearState())

        setTimeout(() => {
            dispatch(closeModal())
            navigate('/cms')
        }, 3000)
    }

    const postNews = async (body: INewsData) => {
        const res = await dispatch(NewsServices.postNews(body))

        if (res.meta.requestStatus === 'rejected') {
            setTimeout(() => {
                dispatch(closeModal())
            }, 3000)

            return
        }

        dispatch(clearState())

        setTimeout(() => {
            dispatch(closeModal())
            navigate('/cms')
        }, 3000)
    }

    return { postNews, editNews }
}
