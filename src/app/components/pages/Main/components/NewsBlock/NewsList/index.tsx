import React from 'react'

import { useGetLastNews } from '../hooks/useGetNews'
import { NewsItem } from './NewsItem'

export const NewsList: React.FC = () => {
    const { news } = useGetLastNews(8)

    return (
        <>
            {news.map(data => {
                return (
                    <NewsItem
                        key={data._id}
                        {...data}
                    />
                )
            })}
        </>
    )
}
