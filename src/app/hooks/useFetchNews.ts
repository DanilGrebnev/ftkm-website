import { INewsItem } from '@interfaces/News'
import { axios } from '@lib/axios'
import { useState } from 'react'

/**
 * Хук для получения статей
 * возвращает стату загрузки, стату ошибки,
 * функцию для запроса к серверу
 */

export const useFetchNews = () => {
    const [news, setNews] = useState<INewsItem>()

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(false)
    /**
     * Функция получения статей
     */
    const fetchNews = async (_id: string) => {
        setLoading(true)

        try {
            const { data } = await axios.get(`news/${_id}`)

            setNews(data as INewsItem)

            setError(false)
        } catch (err) {
            console.error(err)

            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {
        news,
        loading,
        error,
        fetchNews,
    }
}
