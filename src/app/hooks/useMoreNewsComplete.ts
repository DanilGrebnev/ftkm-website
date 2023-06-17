import { useGetNewsStore } from '@hooks/useGetNewsStore'
import React from 'react'

/**
 * Хук проверяет, все ли новости загружены.
 * Если новостей не осталось, то
 */
export const useMoreNewsComplete = () => {
    const [isCompleteMoreNews, setIsCompleteMoreNews] = React.useState(false)

    const { documentsCount, news } = useGetNewsStore()

    React.useEffect(() => {
        setIsCompleteMoreNews(news.length >= documentsCount)
    }, [news])

    return { isCompleteMoreNews }
}
