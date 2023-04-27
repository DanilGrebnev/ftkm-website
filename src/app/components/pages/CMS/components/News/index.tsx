import { LoadingButton } from '@UI/LoadingButton'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { clearState, fetchNews } from '@redux/slices/news'
import { useEffect, useState } from 'react'

import { NewsItem } from './NewsItem'
import s from './style.module.scss'

export const News = () => {
    const limit = 20

    const { documentsCount, error, news, loading } = useAppSelector(
        ({ news }) => news
    )

    const dispatch = useAppDispatch()

    const [skip, setSkip] = useState(0)

    const getNews = async (skip: number) => {
        await dispatch(fetchNews({ skip, limit }))

        setSkip(p => p + limit)
    }

    useEffect(() => {
        dispatch(fetchNews({ skip, limit }))

        setSkip(p => p + limit)

        return () => {
            dispatch(clearState())
            setSkip(0)
        }
    }, [])

    const newsEnding = news.length >= documentsCount

    return (
        <section className={s.news}>
            <SearchFilter />
            <section className={s.newsContainer}>
                {news.map(document => (
                    <NewsItem {...document} />
                ))}
            </section>
            <div className={s.btnContainer}>
                {
                    <LoadingButton
                        text={
                            !newsEnding ? 'Загрузить ещё' : 'Новости кончались'
                        }
                        size="medium"
                        disabled={loading || newsEnding ? true : false}
                        loading={loading}
                        onClick={() => getNews(skip)}
                    />
                }
            </div>
        </section>
    )
}
