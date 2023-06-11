import { axios } from '@lib/axios'
import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import s from './style.module.scss'
import { fetchLogin } from './utils'

const Login = () => {
    const navigate = useNavigate()

    //Функция отправки запрос на сервер
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) return

        axios.get('user/auth').then(res => {
            if (res?.data?.access) {
                navigate('/cms')
            }
        })
    }, [])

    return (
        <div className={s.LoginContainer}>
            <div className={s.InputContainer}>
                <h1>Система администрирования контента</h1>
                <TextField
                    onChange={e => setLogin(e.target.value)}
                    className={s.TextField}
                    label="Логин"
                    variant="outlined"
                />
                <TextField
                    onChange={e => setPassword(e.target.value)}
                    className={s.TextField}
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                />
                <div className={s.BtnGroup}>
                    <Button
                        onClick={() => fetchLogin({ login, password })}
                        variant="contained"
                        className={s.btn}
                    >
                        Войти
                    </Button>
                    <Link to="/">
                        <Button
                            variant="outlined"
                            className={s.btn}
                        >
                            На главную
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
