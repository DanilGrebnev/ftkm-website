import { LoadingButton } from '@UI/LoadingButton'

import { useFetchLogin } from '../../../../hooks/useFetchLogin'

interface ILoginButton {
    login: string
    password: string
}

export const LoginButton: React.FC<ILoginButton> = ({ login, password }) => {
    const { fetchLogin, isLoading } = useFetchLogin()

    return (
        <LoadingButton
            onClick={() => fetchLogin({ login, password })}
            loading={isLoading}
            text="войти"
        />
    )
}
