import { LoadingButton } from '@UI/LoadingButton'
import { globalVariables } from '@globalVariables'
import { useAppSelector } from '@hooks/useAppSelector'
import { useGetNews } from '@hooks/useGetNews'
import { useMoreNewsComplete } from '@hooks/useMoreNewsComplete'

import s from './s.module.scss'

export const ButtonContainer = () => {
    const { getNews } = useGetNews()

    const { isCompleteMoreNews } = useMoreNewsComplete()

    const { skip } = useAppSelector(({ news }) => news)

    const limit = globalVariables.limit
    /*
     *Сколько статей пропустить при запросе
     *(изначально пропустится лимит статей)
     *т.к. лимит статей отрисовывается сразу
     *при первом рендере
     */
    const { loading } = useAppSelector(({ news }) => news)

    const text = isCompleteMoreNews ? 'новости кончались' : 'загрузить ещё'

    return (
        <div className={s.btnContainer}>
            <LoadingButton
                text={text}
                size="medium"
                disabled={loading || isCompleteMoreNews}
                loading={loading}
                onClick={() => getNews({ skip, limit })}
            />
        </div>
    )
}
