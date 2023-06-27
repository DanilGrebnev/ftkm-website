import { LoadingButton } from '@UI/LoadingButton'
import { useGetNews } from '@hooks/useGetNews'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'
import React from 'react'

import s from './s.module.scss'

export const ButtonContainer: React.FC = () => {
    const { getNews } = useGetNews()

    const { isCompleteMoreNews } = useMoreNewsComplete()

    const { loading } = useGetNewsStore()

    const text = !isCompleteMoreNews ? 'Загрузить ещё' : 'Новости кончались'

    return (
        <div className={s.btnContainer}>
            {
                <LoadingButton
                    text={text}
                    size="medium"
                    disabled={loading || isCompleteMoreNews}
                    loading={loading}
                    onClick={() => getNews()}
                />
            }
        </div>
    )
}
