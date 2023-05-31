import { AlertDialog } from '@UI/AlertDialog'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useGetNews } from '@hooks/useGetNews'
import { useOpenModal } from '@hooks/useOpenModal'
import { INewsItem } from '@interfaces/News'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { toggleDeleteLoading } from '@redux/slices/news/news'
import { clearState } from '@redux/slices/news/news'
import { clearSkip } from '@redux/slices/news/news'
import React from 'react'

import { DateBlock } from './components/DateBlock'
import { DeleteBtn } from './components/DeleteBtn'
import { EditBtn } from './components/EditBtn'
import s from './style.module.scss'

export const NewsItem: React.FC<INewsItem> = ({
    _id,
    body,
    createdDate,
    title,
    imgName,
    isDeleteLoading,
}) => {
    const dispatch = useAppDispatch()

    const { getNews } = useGetNews()

    const { open, toggleModal } = useOpenModal()

    const onClickAction = async (_id: string) => {
        dispatch(toggleDeleteLoading(_id))

        const res: any = await dispatch(NewsServices.deleteNews(_id))

        if (!res.error) {
            dispatch(clearState())
            dispatch(clearSkip())
            getNews(0)
            return
        }

        dispatch(toggleDeleteLoading(_id))
    }

    return (
        <div className={s.newsItem}>
            {/* {imgName && (
                <ImgComponent
                    src={'http://127.0.0.1:3001/' + imgName}
                    alt=""
                />
            )} */}
            <div className={s.itemInfo}>
                <h1>{title}</h1>
                <DateBlock createdDate={createdDate} />

                <div className={s.btnGroup}>
                    <EditBtn id={_id} />
                    <DeleteBtn
                        isLoading={isDeleteLoading}
                        onClick={toggleModal}
                    />
                    <AlertDialog
                        open={open}
                        handleClose={toggleModal}
                        dialogTitle="Удалить новость?"
                        onClickAction={() => onClickAction(_id)}
                    />
                </div>
            </div>
        </div>
    )
}
