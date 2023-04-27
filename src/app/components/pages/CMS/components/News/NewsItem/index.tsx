import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'
import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import FolderSharpIcon from '@mui/icons-material/FolderSharp'
import { FC } from 'react'

import { INewsItem } from '../../../../../../interface/News'
import s from './style.module.scss'

export const NewsItem: FC<INewsItem> = ({
    _id,
    body,
    createdDate,
    description,
    title,
    imgUrl,
}) => {
    return (
        <div className={s.newsItem}>
            <img src={imgUrl} alt="Изображение статьи" />
            <div className={s.itemInfo}>
                <h1>{title}</h1>
                <div className={s.date}>
                    <CalendarMonthSharpIcon sx={{ color: '#0f78ed' }} />
                    <p>Дата публикации:</p>
                    <p>{createdDate}</p>
                </div>
                <div className={s.files}>
                    <FolderSharpIcon sx={{ color: '#e4ed0f' }} />
                    <p>Прикреплённых файлов: 3</p>
                </div>

                <div className={s.btnGroup}>
                    <EditToolTip />
                    <DeleteToolTip />
                </div>
            </div>
        </div>
    )
}
