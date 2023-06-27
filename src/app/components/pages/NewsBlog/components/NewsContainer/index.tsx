import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { useGetNews } from '@hooks/useGetNews'
import { useGetNewsStore } from '@hooks/useGetNewsStore'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NewsContainer: React.FC = () => {
    const { news } = useGetNewsStore()

    const { getNews } = useGetNews()

    useEffect(() => {
        if (news.length) return

        getNews()
    }, [])

    return (
        <Grid className={s['news-blog']}>
            {news.map(news => (
                <Link
                    key={news._id}
                    to={`${news._id}`}
                >
                    <NewsCardItem {...news} />
                </Link>
            ))}
        </Grid>
    )
}
