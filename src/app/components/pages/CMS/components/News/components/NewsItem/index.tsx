import { AlertDialog } from '@UI/AlertDialog'
import { DeleteToolTip } from '@UI/ToolTip/DeleteToolTip'
import { EditToolTip } from '@UI/ToolTip/EditToolTip'
import { ImgComponent } from '@components/Ordinary/CardMedia'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { INewsItem } from '@interfaces/News'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
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
    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const onClickAction = async () => {
        const res = await dispatch(NewsServices.deleteNews(_id))

        console.log(res)
    }

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
                    <DeleteToolTip onClick={openModal} />
                    <AlertDialog
                        handleClose={() => setOpen(false)}
                        open={open}
                        dialogTitle="Удалить новость?"
                        onClickAction={onClickAction}
                    />
                </div>
            </div>
        </div>
    )
}
