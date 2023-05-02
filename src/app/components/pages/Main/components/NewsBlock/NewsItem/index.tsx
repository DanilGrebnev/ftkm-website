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
    const img = 'http://127.0.0.1:3001/' + imgName
    return (
        <Link to={`news/${_id}`}>
            <div className={s.container}>
                {imgName && <img alt={title} src={img} />}

                <div className={s.date}>{createdDate}</div>
                <div className={s.body}>{body}</div>
            </div>
        </Link>
    )
}
