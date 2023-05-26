import { LoadingButton } from '@UI/LoadingButton'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import React, { useState } from 'react'

import s from './s.module.scss'

export const ButtonContainer: React.FC = () => {
    const dispatch = useAppDispatch()

    const { loading, news, documentsCount } = useAppSelector(({ news }) => news)

    const [skip, setSkip] = useState(1)

    const limit = 1

    const newsEnding = news.length >= documentsCount

    const getNews = async (skip: number) => {
        await dispatch(NewsServices.getNews({ skip, limit }))

        setSkip(skip + 1)
    }

    return (
        <div className={s.btnContainer}>
            {
                <LoadingButton
                    text={!newsEnding ? 'Загрузить ещё' : 'Новости кончались'}
                    size="medium"
                    disabled={loading || newsEnding ? true : false}
                    loading={loading}
                    onClick={() => getNews(skip)}
                />
            }
        </div>
    )
}
