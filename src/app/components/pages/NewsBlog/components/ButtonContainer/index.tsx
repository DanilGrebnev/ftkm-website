import { LoadingButton } from '@UI/LoadingButton'
import { useAppSelector } from '@hooks/useAppSelector'
import { useGetNews } from '@hooks/useGetNews'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'
import React from 'react'

import s from './s.module.scss'

export const ButtonContainer: React.FC = () => {
    const { getNews } = useGetNews()

    const { isCompleteMoreNews } = useMoreNewsComplete()

    const { loading } = useAppSelector(({ news }) => news)

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
