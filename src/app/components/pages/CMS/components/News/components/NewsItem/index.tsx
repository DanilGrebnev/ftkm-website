import { AlertDialog } from '@UI/AlertDialog'
import { useAppDispatch } from '@hooks/useAppDispatch'
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

    const { open, closeModal, openModal } = useOpenModal()

    const onClickAction = async (_id: string) => {
        dispatch(toggleDeleteLoading(_id))

        const res: any = await dispatch(NewsServices.deleteNews(_id))

        if (!res.error) {
            dispatch(clearState())
            dispatch(clearSkip())
            dispatch(NewsServices.getNews({}))
        }

        dispatch(toggleDeleteLoading(_id))

        console.log(res)
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
                        onClick={openModal}
                    />

                    <AlertDialog
                        open={open}
                        handleClose={closeModal}
                        dialogTitle="Удалить новость?"
                        onClickAction={() => onClickAction(_id)}
                    />
                </div>
            </div>
        </div>
    )
}
