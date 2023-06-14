import { useOpenModal } from '@hooks/useOpenModal'
import { INewsItem } from '@interfaces/News'
import React from 'react'

import { AlertDeleteDialog } from './components/AlertDeleteDialog'
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
    const { open, toggleModal } = useOpenModal()

    return (
        <div className={s.newsItem}>
            <div className={s.itemInfo}>
                <h1>{title}</h1>
                <DateBlock createdDate={createdDate} />

                <div className={s.btnGroup}>
                    <EditBtn id={_id} />
                    <DeleteBtn
                        isLoading={isDeleteLoading}
                        onClick={toggleModal}
                    />
                    <AlertDeleteDialog
                        id={_id}
                        closeModal={toggleModal}
                        open={open}
                    />
                </div>
            </div>
        </div>
    )
}
