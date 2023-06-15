import { axios } from '@lib/axios'
import { redirectToCmsPage } from '@lib/redirectToCmsPage'
import { useEffect } from 'react'

export const useIsAuth = () => {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return
        }

        axios.get('user/auth').then(res => {
            if (res?.data?.access) {
                redirectToCmsPage()
            }
        })
    }, [])
}
