import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useIsEmptyFields } from '@hooks/useIsEmptyFields'
import { useSetData } from '@hooks/useSetData'
import { TextField } from '@mui/material'

export const TitleInput = () => {
    const { setData } = useSetData()

    const { newsFields } = useGetNewsStore()

    const { isEmptyTitle } = useIsEmptyFields()

    return (
        <TextField
            autoComplete="off"
            error={!isEmptyTitle}
            value={newsFields.title}
            name="title"
            onChange={setData}
            sx={{ maxWidth: '1000px' }}
            label="Заголовок новости"
            helperText={!isEmptyTitle && 'Поле не может быть пустым'}
        />
    )
}
