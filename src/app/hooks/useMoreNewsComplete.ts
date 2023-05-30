import React from 'react'

import { useAppSelector } from './useAppSelector'

export const useMoreNewsComplete = () => {
    const [isCompleteMoreNews, setIsCompleteMoreNews] = React.useState(false)

    const { documentsCount, news } = useAppSelector(({ news }) => news)

    React.useEffect(() => {
        setIsCompleteMoreNews(news.length >= documentsCount)

        // console.clear()
        // console.log('Документов ', news.length)
        // console.log('Всего документов', documentsCount)
    }, [news])

    return { isCompleteMoreNews }
}
