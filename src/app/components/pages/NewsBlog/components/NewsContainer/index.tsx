import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { useAppSelector } from '@hooks/useAppSelector'
import React from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NewsContainer: React.FC = () => {
    const { news } = useAppSelector(({ news }) => news)
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
