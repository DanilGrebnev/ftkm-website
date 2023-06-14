import { axios } from '@lib/axios'
import { useEffect } from 'react'

export const useIsAuth = () => {
    useEffect(() => {
        const url = window.location.href

        if (!localStorage.getItem('token')) {
            return
        }

        axios.get('user/auth').then(res => {
            if (res?.data?.access) {
                window.location.href = url.replace('login', 'cms')
            }
        })
    }, [])
}
