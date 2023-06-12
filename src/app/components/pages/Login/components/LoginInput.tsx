import { ILoginInput } from '@interfaces/Login'
import { TextField } from '@mui/material'

import s from '../style.module.scss'

export const LoginInput: React.FC<ILoginInput> = ({ setValue }) => {
    return (
        <TextField
            onChange={(e: any) => setValue(e.target.value)}
            className={s.TextField}
            label="Логин"
            variant="outlined"
        />
    )
}
