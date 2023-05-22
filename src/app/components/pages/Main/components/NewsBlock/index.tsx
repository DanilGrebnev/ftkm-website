import { Grid } from '@components/containers/Grid'
import { axios } from '@lib/axios'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { INewsItem } from '../../../../../interface/News'
import { NewsItem } from './NewsItem'
import s from './style.module.scss'

export const NewsBlock = () => {
    const [news, setNews] = useState<INewsItem[]>([])

    const fetchNews = async () => {
        const { data } = await axios.get(`news/lastDoc?limit=${8}`)
        setNews(data)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <>
            <Grid className={s.newsBlock}>
                {news.map(news => {
                    return (
                        <NewsItem
                            key={news._id}
                            {...news}
                        />
                    )
                })}
            </Grid>
            <div className={s.archiveBtn}>
                <Link to="news">
                    <Button variant="outlined">Архив новостей</Button>
                </Link>
            </div>
        </>
    )
}
