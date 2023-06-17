import { useAppDispatch } from '@hooks/useAppDispatch'
import { INewsData } from '@interfaces/News'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { clearState } from '@redux/slices/news/news'
import { closeModal } from '@redux/slices/news/news'
import { useNavigate } from 'react-router-dom'

interface IEditNews {
    body: INewsData
    _id: string
}

/**
 * Хук инкапсулирует в себе функции по
 * по отправки новостей и по редактированию
 */
export const useSendNews = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const editNews = async ({ body, _id }: IEditNews) => {
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
