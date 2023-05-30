import { LoadingButton } from '@UI/LoadingButton'
import { globalVariables } from '@globalVariables'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect, useState } from 'react'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { isCompleteMoreNews } = useMoreNewsComplete()

    const limit = globalVariables.limit
    /*
     *Сколько статей пропустить при запросе
     *(изначально пропустится лимит статей)
     *т.к. лимит статей отрисовывается сразу
     *при первом рендере
     */
    const [skip, setSkip] = useState(limit)

    const { loading } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    const getNews = () => {
        dispatch(NewsServices.getNews({ limit, skip }))

        setSkip(p => p + limit)
    }

    const text = isCompleteMoreNews ? 'новости кончались' : 'загрузить ещё'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size="medium"
                disabled={loading || isCompleteMoreNews}
                loading={loading}
                onClick={getNews}
            />
        </div>
    )
}
