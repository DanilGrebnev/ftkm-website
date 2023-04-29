import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'
import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { ImgComponent } from '@components/Ordinary/CardMedia'
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
