import { INewsItem } from 'app/interface/News'
import React from 'react'
import { Link } from 'react-router-dom'

import { useGetLastNews } from '../hooks/useGetNews'
import s from './style.module.scss'

const NewsItem: React.FC<INewsItem> = ({
    _id,
    body,
    title,
    imgName,
    createdDate,
}) => {
    return (
        <Link to={`news/${_id}`}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.date}>{createdDate}</p>
                    <p className={s.body}>{body}</p>
                </div>
            </div>
        </Link>
    )
}

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
