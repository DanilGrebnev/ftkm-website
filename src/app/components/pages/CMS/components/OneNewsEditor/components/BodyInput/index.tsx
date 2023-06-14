import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useIsEmptyFields } from '@hooks/useIsEmptyFields'
import { useSetData } from '@hooks/useSetData'
import { TextField } from '@mui/material'

export const BodyInput = () => {
    const { setData } = useSetData()

    const { newsFields } = useGetNewsStore()

    const { isEmptyBody } = useIsEmptyFields()

    return (
        <TextField
            error={!isEmptyBody}
            value={newsFields.body}
            name="body"
            autoComplete="off"
            onChange={setData}
            sx={{ maxWidth: '1000px' }}
            label="Текст новости"
            helperText={!isEmptyBody && 'Поле не может быть пустым'}
            multiline
            minRows={8}
            maxRows={20}
        />
    )
}
