import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect } from 'react'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'

export const NewsContainer = () => {
    const { news } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (news.length) return

        dispatch(NewsServices.getNews({ limit: 1, skip: 0 }))
    }, [])

    return (
        <section className={s.newsContainer}>
            {news.map(news => (
                <NewsItem
                    key={news._id}
                    {...news}
                />
            ))}
        </section>
    )
}
