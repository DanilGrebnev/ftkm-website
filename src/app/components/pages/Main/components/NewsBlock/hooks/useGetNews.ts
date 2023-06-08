import { INewsItem } from '@interfaces/News'
import { axios } from '@lib/axios'
import { useEffect, useState } from 'react'

export const useGetNews = () => {
    const [news, setNews] = useState<INewsItem[]>([])

    const fetchNews = async () => {
        const { data } = await axios.get(`news/lastDoc?limit=${8}`)
        setNews(data)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return { news }
}
