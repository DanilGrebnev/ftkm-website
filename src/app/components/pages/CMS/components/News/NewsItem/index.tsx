import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'
import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { ImgComponent } from '@components/Ordinary/CardMedia'
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
    imgUrl,
}) => {
    return (
        <div className={s.newsItem}>
            {imgUrl && (
                <ImgComponent src={'http://127.0.0.1:3001/' + imgUrl} alt="" />
            )}
            <div className={s.itemInfo}>
                <h1>{title}</h1>
                <div className={s.date}>
                    <CalendarMonthSharpIcon sx={{ color: '#0f78ed' }} />
                    <p>Дата публикации:</p>
                    <p>{createdDate}</p>
                </div>

                {/* <div className={s.files}>
                    <FolderSharpIcon sx={{ color: '#e4ed0f' }} />
                    <p>Прикреплённых файлов: 3</p>
                </div> */}

                <div className={s.btnGroup}>
                    <Link to={_id}>
                        <EditToolTip />
                    </Link>
                    <DeleteToolTip />
                </div>
            </div>
        </div>
    )
}
