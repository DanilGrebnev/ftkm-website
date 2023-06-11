import { API_RESPONSES } from '@API_RESPONSES'
import { axios } from '@lib/axios'

type payload = {
    login: string
    password: string
}

type data = {
    data?: { token?: string }
}

export const fetchLogin = async ({
    login,
    password,
}: payload): Promise<void> => {
    const payload = { login, password }

    try {
        const { data }: data = await axios.post('user/login', payload)

        const token = data?.token

        if (!token) return

        localStorage.setItem('token', token)

        window.location.reload()
    } catch (err) {
        console.log(err)

        console.log(API_RESPONSES.LOGIN_ERROR)
    }
}
