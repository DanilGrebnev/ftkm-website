import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Button } from '@mui/material'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import React from 'react'

type ISendButton = { id: string | undefined }

export const SendButton: React.FC<ISendButton> = ({ id }) => {
    const { editNews } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    return id ? (
        <Button
            // onClick={() => editNews(data)}
            variant="contained"
            children="Изменить"
        />
    ) : (
        <Button
            onClick={() => dispatch(NewsServices.postNews(editNews))}
            variant="contained"
            children=" Отправить"
        />
    )
}
