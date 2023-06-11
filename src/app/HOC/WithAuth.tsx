import { axios } from '@lib/axios'
import React, { ComponentType, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IWithAuth {
    Component: ComponentType<any>
}

export const WithAuth: React.FC<IWithAuth> = ({ Component }) => {
    const navigate = useNavigate()

    const isAuth = async () => {
        console.log('Запрос для верификации токена')

        try {
            if (!localStorage.getItem('token')) navigate('/login')

            const res: any = await axios.get('user/auth')

            console.log(res)

            if (!res?.data?.access) {
                navigate('/login')
            }

            console.log('Проверка токена успешна')
        } catch (err) {
            console.log(err)

            console.log('Ошибка проверки токена')

            navigate('/login')
        }
    }

    useEffect(() => {
        isAuth()
    }, [])

    return <Component />
}
