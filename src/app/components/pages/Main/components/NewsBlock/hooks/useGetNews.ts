import { INewsItem } from '@interfaces/News'
import { axios } from '@lib/axios'
import { useEffect, useState } from 'react'

export const useGetLastNews = (amount: number) => {
    const [news, setNews] = useState<INewsItem[]>([])

    const fetchNews = async () => {
        const { data } = await axios.get(`news/lastDoc?limit=${amount}`)
        setNews(data)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return { news }
}
