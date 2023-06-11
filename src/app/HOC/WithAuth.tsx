import { axios } from '@lib/axios'
import React, { ComponentType, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IWithAuth {
    Component: ComponentType<any>
}

// Компонент принимает в себя другой компонент и, если токен
// не проходит верификацию, то перенаправляет на окно авторизации
export const WithAuth: React.FC<IWithAuth> = ({ Component }) => {
    const navigate = useNavigate()

    const isAuth = async () => {
        try {
            // console.log('Запрос для верификации токена')

            if (!localStorage.getItem('token')) navigate('/login')

            const res: any = await axios.get('user/auth')

            if (!res?.data?.access) {
                navigate('/login')
            }

            // console.log('Проверка токена успешна')
        } catch (err) {
            console.log(err)

            // console.log('Ошибка проверки токена')

            navigate('/login')
        }
    }

    useEffect(() => {
        isAuth()
    }, [])

    return <Component />
}
