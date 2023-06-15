/** @module useFetchLogin */
import { API_RESPONSES } from '@API_RESPONSES'
import { axios } from '@lib/axios'
import { redirectToCmsPage } from '@lib/redirectToCmsPage'
import { useState } from 'react'

type payload = {
    login: string
    password: string
}

type data = {
    data?: { token?: string }
}

interface IReturnData {
    isLoading: boolean
    fetchLogin: (payload: payload) => Promise<any>
}
/**
 * Хук возвращает статус загрузки запроса к
 * серверу и функцию для авторизации на сервере
 * @returns {Object} obj
 * @returns {boolean} obj.isLoading - статус загрузки
 * @returns {Function} obj.fetchLogin - функция запроса к серверу
 */
export const useFetchLogin = (): IReturnData => {
    const [isLoading, setLoading] = useState<boolean>(false)

    /**
     * Функция запроса к серверу для авторизации.
     * В случае успешной авторизации,
     * устанавливает в локальное хранилище токен доступа и
     * переадресует на страницу CMS
     * @param {Objcet} payload
     * @param {string} payload.login
     * @param {string} payload.password
     */
    const fetchLogin = async (payload: payload): Promise<any> => {
        setLoading(true)

        try {
            const { data }: data = await axios.post('user/login', payload)

            const token = data?.token

            if (!token) return

            localStorage.setItem('token', token)

            redirectToCmsPage()
        } catch (err) {
            console.log(err)

            console.log(API_RESPONSES.LOGIN_ERROR)
        } finally {
            setLoading(false)
        }
    }

    return {
        isLoading,
        fetchLogin,
    }
}
