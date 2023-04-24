import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import s from './style.module.scss'

export const Login = () => {
    return (
        <div className={s.LoginContainer}>
            <div className={s.InputContainer}>
                <h1>Content Management System</h1>
                <TextField className={s.TextField} label="Лоигн" variant="outlined" />
                <TextField
                    className={s.TextField}
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                />
                <div className={s.BtnGroup}>
                    <Button variant="contained" className={s.btn}>
                        Войти
                    </Button>
                    <Link to="/">
                        <Button variant="outlined" className={s.btn}>
                            На главную
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
