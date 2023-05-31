import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { useAppSelector } from '@hooks/useAppSelector'
import { useGetNews } from '@hooks/useGetNews'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NewsContainer: React.FC = () => {
    const { news } = useAppSelector(({ news }) => news)
    const { getNews } = useGetNews()

    useEffect(() => {
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
