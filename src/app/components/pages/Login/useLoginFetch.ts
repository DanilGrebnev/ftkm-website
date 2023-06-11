import { API_RESPONSES } from '@API_RESPONSES'
import { axios } from '@lib/axios'
import { useNavigate } from 'react-router-dom'

type payload = {
    login: string
    password: string
}

type data = {
    data?: { token?: string }
}

export const useFetchLogin = () => {
    const navigate = useNavigate()

    const fetchLogin = async ({ login, password }: payload): Promise<void> => {
        const payload = { login, password }

        try {
            const { data }: data = await axios.post('user/login', payload)

            const token = data?.token

            if (!token) return

            navigate('/cms')

            localStorage.setItem('token', token)
        } catch (err) {
            console.log(err)
            console.log(API_RESPONSES.LOGIN_ERROR)
        }
    }

    return { fetchLogin }
}
