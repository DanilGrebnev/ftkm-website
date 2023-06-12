import { useIsAuth } from '@hooks/useIsAuth'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LoginButton } from './components/LoginButton'
import { LoginInput } from './components/LoginInput'
import { PasswordInput } from './components/PasswordInput'
import s from './style.module.scss'

const Login = () => {
    useIsAuth()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={s.LoginContainer}>
            <div className={s.InputContainer}>
                <h1>Система администрирования контента</h1>

                <LoginInput setValue={setLogin} />

                <PasswordInput setValue={setPassword} />

                <div className={s.BtnGroup}>
                    <LoginButton
                        login={login}
                        password={password}
                    />
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
