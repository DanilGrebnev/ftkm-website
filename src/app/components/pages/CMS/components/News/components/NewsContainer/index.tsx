import { useGetNews } from '@hooks/useGetNews'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useEffect } from 'react'

import { NewsItem } from '../NewsItem'
import s from './s.module.scss'

export const NewsContainer = () => {
    const { news } = useGetNewsStore()

    const { getNews } = useGetNews()

    useEffect(() => {
        if (news.length) return

        getNews()
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
