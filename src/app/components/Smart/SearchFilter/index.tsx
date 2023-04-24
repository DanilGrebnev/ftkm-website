import { Button, TextField } from '@mui/material'

import style from './SearchField.module.scss'
import { BasicSelect } from './Select'

export const SearchFilter = () => {
    return (
        <div className={`SearchFilter ${style.SearchFilter}`}>
            <TextField
                size="small"
                placeholder="Введите заголовок статьи"
                label="Поиск статей"
                id="outlined"
                variant="outlined"
                fullWidth={true}
            />
            <BasicSelect size="small" label="Год" />
            <Button variant="contained">Поиск</Button>
        </div>
    )
}
