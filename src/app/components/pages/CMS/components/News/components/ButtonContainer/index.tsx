import { LoadingButton } from '@UI/LoadingButton'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { clearState } from '@redux/slices/news/news'
import { useEffect, useState } from 'react'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { loading, news, documentsCount } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    const getNews = () => {
        dispatch(NewsServices.getNews({ skip: 1, limit: 1 }))
    }

    const ClearState = () => {
        dispatch(clearState(32))
    }

    useEffect(() => {
        ClearState()
    }, [])

    const disabled = news.length >= documentsCount

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text="Загрузить ещё"
                size="medium"
                disabled={loading || disabled}
                loading={loading}
                onClick={getNews}
            />
        </div>
    )
}
