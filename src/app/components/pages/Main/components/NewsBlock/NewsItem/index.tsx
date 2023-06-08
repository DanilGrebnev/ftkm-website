import { onErrorLoadImage } from '@lib/onErrorLoadImage'
import { INewsItem } from 'app/interface/News'
import React from 'react'
import { Link } from 'react-router-dom'

import s from './style.module.scss'

export const NewsItem: React.FC<INewsItem> = ({
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
