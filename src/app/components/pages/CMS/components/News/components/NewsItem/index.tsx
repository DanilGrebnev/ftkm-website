import { useOpenModal } from '@hooks/useOpenModal'
import { INewsItem } from '@interfaces/News'
import Paper from '@mui/material/Paper'
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
        <Paper>
            <div className={s.newsItem}>
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
        </Paper>
    )
}
