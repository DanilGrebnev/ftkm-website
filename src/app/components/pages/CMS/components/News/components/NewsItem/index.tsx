import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'
import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { ImgComponent } from '@components/Ordinary/CardMedia'
import { globalVariables } from '@globalVariables'
import { INewsItem } from '@interfaces/News'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import React from 'react'
import { Link } from 'react-router-dom'

import s from './style.module.scss'

export const NewsItem: React.FC<INewsItem> = ({
    _id,
    body,
    createdDate,
    title,
    imgName,
}) => {
    return (
        <div className={s.newsItem}>
            {imgName && (
                <ImgComponent
                    src={'http://127.0.0.1:3001/' + imgName}
                    alt=""
                />
            )}
            <div className={s.itemInfo}>
                <h1>{title}</h1>
                <div className={s.date}>
                    <CalendarMonthSharpIcon sx={{ color: '#0f78ed' }} />
                    <p>Дата публикации:</p>
                    <p>{createdDate}</p>
                </div>

                <div className={s.btnGroup}>
                    <Link to={`newsEditor/` + _id}>
                        <EditToolTip />
                    </Link>
                    <DeleteToolTip />
                </div>
            </div>
        </div>
    )
}
