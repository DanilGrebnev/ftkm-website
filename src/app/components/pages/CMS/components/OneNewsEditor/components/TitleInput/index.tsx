import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { TextField } from '@mui/material'
import { setInputData } from '@redux/slices/news/news'

export const TitleInput = () => {
    const { editNews } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    const setData = (e: any) => {
        dispatch(
            setInputData({
                name: e.target.name,
                value: e.target.value,
            })
        )
    }

    return (
        <TextField
            value={editNews.title}
            name="title"
            onChange={setData}
            sx={{ maxWidth: '1000px' }}
            label="Текст новости"
        />
    )
}
