import { LoadingButton } from '@UI/LoadingButton'
import { useAppSelector } from '@hooks/useAppSelector'
import { useState } from 'react'

import { useIsEmptyFields } from '../../fn/useIsEmptyFields'
import { useSendNews } from '../../hook/useSendNews'

interface ISendButton {
    id: string | undefined
    ref?: HTMLDivElement
}

export const SendButton: React.FC<ISendButton> = ({ id }) => {
    const [disabled, setDisabled] = useState(false)

    const { newsFields, fetchNews } = useAppSelector(({ news }) => news)

    const { postNews, editNews } = useSendNews()

    const { isEmpty } = useIsEmptyFields()

    const onClick = id
        ? () => editNews(newsFields, id)
        : () => postNews(newsFields)

    const text = id ? 'Изменить' : 'Отправить'

    return (
        <LoadingButton
            onClick={() => {
                setDisabled(true)
                onClick()
                setTimeout(setDisabled, 3000, false)
            }}
            loading={fetchNews}
            text={text}
            disabled={isEmpty || disabled}
        />
    )
}
