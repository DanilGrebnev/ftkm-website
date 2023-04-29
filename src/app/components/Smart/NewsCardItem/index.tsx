import { ImgComponent } from '@components/Ordinary/CardMedia'
import iguanaImg from '@images/green-iguana.jpg'
import { CardActionArea } from '@mui/material'
import CardItem from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

// import {CardMedia} from '@Ordinary/'
import { INewsItem } from '../../../interface/News'
import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = React.memo(
    ({ title, body, createdDate, imgUrl, _id }) => {
        return (
            <CardItem className={s.cardContainer}>
                <CardActionArea className={s.cardContainer}>
                    {imgUrl && (
                        <ImgComponent
                            className={s.img}
                            src={`http://127.0.0.1:3001/${imgUrl}`}
                            alt=""
                        />
                    )}
                    <div className={s.cardContent}>
                        <p className={s.title}>{title}</p>
                        <p className={s.date}>{createdDate}</p>
                        <p className={s.body}>{body}</p>
                    </div>
                </CardActionArea>
            </CardItem>
        )
    }
)
