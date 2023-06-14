import React from 'react'

import { INewsItem } from '../../../interface/News'
import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = React.memo(
    ({ title, body, createdDate, imgName, _id }) => {
        return (
            <div className={s.cardContainer}>
                <div className={s.bgFilter} />

                <p className={s.title}>{title}</p>
                <p className={s.date}>{createdDate}</p>
                <p className={s.body}>{body}</p>
            </div>
        )
    }
)
