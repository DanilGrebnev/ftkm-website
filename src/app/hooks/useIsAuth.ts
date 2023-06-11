import { axios } from '@lib/axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useIsAuth = () => {
    const navigate = useNavigate()
    const [access, setAccess] = useState(false)

    const isAuth = async () => {
        try {
            if (!localStorage.getItem('token')) return

            const res: any = await axios.get('user/auth')

            const access = res?.data?.access

            if (access) setAccess(true)
            console.log(access)
        } catch (err) {
            setAccess(false)

            console.log(err)
        }
    }

    useEffect(() => {
        isAuth()
        if (access) navigate('/cms')
    }, [access])
}
