import { axios } from '@lib/axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useIsAuth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return
        }

        axios.get('user/auth').then(res => {
            if (res?.data?.access) {
                navigate('/cms')
            }
        })
    }, [])
}
