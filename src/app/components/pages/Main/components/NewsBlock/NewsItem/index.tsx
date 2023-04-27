import { INewsItem } from 'app/interface/News'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to={`news/${_id}`}>
            <div className={s.container}>
                <img alt={title} src={imgUrl} />
                <p className={s.date}>{date}</p>
                <p className={s.body}>{body}</p>
            </div>
        </Link>
    )
}
