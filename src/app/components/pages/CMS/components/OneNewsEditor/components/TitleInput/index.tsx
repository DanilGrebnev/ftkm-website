import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { INewsEditInputs } from '@interfaces/News'
import { TextField } from '@mui/material'
import { setInputData } from '@redux/slices/news/news'

import { useIsEmptyFields } from '../../fn/useIsEmptyFields'

export const TitleInput: React.FC<INewsEditInputs> = ({ onChange }) => {
    const { newsFields } = useAppSelector(({ news }) => news)

    const { isEmptyTitle } = useIsEmptyFields()

    return (
        <TextField
            autoComplete="off"
            error={!isEmptyTitle}
            value={newsFields.title}
            name="title"
            onChange={onChange}
            sx={{ maxWidth: '1000px' }}
            label="Заголовок новости"
            helperText={!isEmptyTitle && 'Поле не может быть пустым'}
        />
    )
}
