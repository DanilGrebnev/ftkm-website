import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { INewsEditInputs } from '@interfaces/News'
import { TextField } from '@mui/material'
import { setInputData } from '@redux/slices/news/news'
import React from 'react'

import { useIsEmptyFields } from '../../fn/useIsEmptyFields'

export const BodyInput: React.FC<INewsEditInputs> = ({ onChange }) => {
    const { newsFields } = useAppSelector(({ news }) => news)

    const { isEmptyBody } = useIsEmptyFields()

    return (
        <TextField
            error={!isEmptyBody}
            value={newsFields.body}
            name="body"
            autoComplete="off"
            onChange={onChange}
            sx={{ maxWidth: '1000px' }}
            label="Текст новости"
            helperText={!isEmptyBody && 'Поле не может быть пустым'}
            multiline
            minRows={8}
            maxRows={20}
        />
    )
}
