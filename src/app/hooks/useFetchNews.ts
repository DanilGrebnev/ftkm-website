import { axios } from '@lib/axios'
import { useState } from 'react'

import { INewsItem } from '../interface/News'

export const useFetchNews = () => {
    const [news, setNews] = useState<INewsItem>()

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    const fetchNews = async (_id: string) => {
        try {
            const { data } = await axios.get(`news/${_id}`)

            setNews(data as INewsItem)

            setLoading(false)

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
