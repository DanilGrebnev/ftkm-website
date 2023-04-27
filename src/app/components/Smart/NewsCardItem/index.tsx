import img from '@images/green-iguana.jpg'
import { CardActionArea } from '@mui/material'
import CardItem from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

import { INewsItem } from '../../../interface/News'
import s from './style.module.scss'

export const NewsCardItem: React.FC<INewsItem> = React.memo(
    ({ title, body, createdMonth, createdDay, createdYear, _id }) => {
        const month = createdMonth <= 9 ? '0' + createdMonth : createdMonth

        const date = `${createdDay}.${month}.${createdYear}`

        return (
            <CardItem className={s.cardContainer}>
                <CardActionArea>
                    <CardMedia
                        loading="lazy"
                        className={s.img}
                        component="img"
                        // image={props.img || ''}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ overflow: 'hidden', padding: '15px' }}>
                        <Typography
                            className={s.title}
                            gutterBottom
                            variant="h5"
                            component="p"
                        >
                            {title}
                        </Typography>
                        <Typography
                            className={s.date}
                            gutterBottom
                            variant="subtitle1"
                            component="p"
                        >
                            {date}
                        </Typography>
                        <Typography
                            className={s.body}
                            variant="body2"
                            color="text.secondary"
                        >
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </CardItem>
        )
    }
)
