import { LoadingButton } from '@UI/LoadingButton'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Button } from '@mui/material'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useSendNews } from '../../hook/useSendNews'

interface ISendButton {
    id: string | undefined
    ref?: HTMLDivElement
}

export const SendButton: React.FC<ISendButton> = ({ id }) => {
    const { newsFields, fetchNews } = useAppSelector(({ news }) => news)

    const { postNews, editNews } = useSendNews()

    return id ? (
        <LoadingButton
            onClick={() => editNews(newsFields, id)}
            loading={fetchNews}
            text="Изменить"
        />
    ) : (
        <LoadingButton
            onClick={() => postNews(newsFields)}
            loading={fetchNews}
            text="Отправить"
        />
    )
}
