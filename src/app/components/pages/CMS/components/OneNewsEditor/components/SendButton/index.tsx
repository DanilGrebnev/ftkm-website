import { LoadingButton } from '@UI/LoadingButton'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useIsEmptyFields } from '@hooks/useIsEmptyFields'
import { useSendNews } from '@hooks/useSendNews'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const SendButton: React.FC = () => {
    const { _id } = useParams()

    const [disabled, setDisabled] = useState(false)

    const { newsFields, fetchNews } = useGetNewsStore()

    const { postNews, editNews } = useSendNews()

    const { isEmpty } = useIsEmptyFields()

    const onClick = _id
        ? () => editNews({ body: newsFields, _id })
        : () => postNews(newsFields)

    return (
        <LoadingButton
            onClick={() => {
                setDisabled(true)
                onClick()
                setTimeout(setDisabled, 3000, false)
            }}
            loading={fetchNews}
            text={_id ? 'Изменить' : 'Отправить'}
            disabled={isEmpty || disabled}
        />
    )
}
