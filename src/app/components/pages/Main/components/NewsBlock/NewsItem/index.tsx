import { INewsItem } from 'app/interface/News'
import React from 'react'

import s from './style.module.scss'

export const NewsItem: React.FC<INewsItem> = ({
    _id,
    body,
    createdDay,
    createdMonth,
    createdYear,
    title,
    imgUrl,
}) => {
    const date = `${createdDay}.${
        createdMonth < 10 ? '0' + createdMonth : createdMonth
    }.${createdYear}`

    return (
        <div className={s.container}>
            <img alt={title} src={imgUrl} />
            <p className={s.date}>{date}</p>
            <p className={s.body}>{body}</p>
        </div>
    )
}
