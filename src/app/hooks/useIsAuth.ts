import { axios } from '@lib/axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetDataFromLocalStorage } from './getDataFromLocalStorage'

export const useIsAuth = () => {
    const navigate = useNavigate()

    const { getItemFromLocalStorage, data } = useGetDataFromLocalStorage()

    const [access, setAccess] = useState(false)

    const isAuth = async () => {
        try {
            if (!getItemFromLocalStorage('token')) return

            const res: any = await axios.get('user/auth')

            const access = res?.data?.access

            if (!access) navigate('/login')

            navigate('/cms')

            console.log(access)
        } catch (err) {
            setAccess(false)

            console.log(err)
        }
    }

    useEffect(() => {
        isAuth()
    }, [])
}
