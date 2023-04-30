import { ImgComponent } from '@components/Ordinary/CardMedia'
import { onErrorLoadImage } from '@lib/onErrorLoadImage'
import React from 'react'

import { INewsItem } from '../../../interface/News'
import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = React.memo(
    ({ title, body, createdDate, imgUrl, _id }) => {
        const img = 'http://127.0.0.1:3001/' + imgUrl

        return (
            <div className={s.cardContainer}>
                <div className={s.bgFilter} />
                {imgUrl && (
                    <ImgComponent
                        onError={onErrorLoadImage}
                        className={s.img}
                        src={img}
                        alt="Image"
                    />
                )}
                <p className={s.title}>{title}</p>
                <p className={s.date}>{createdDate}</p>
                <p className={s.body}>{body}</p>
            </div>
        )
    }
)
