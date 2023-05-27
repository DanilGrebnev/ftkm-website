import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { NewsServices } from '@redux/slices/news/NewsServicesThunk'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import s from './s.module.scss'

export const NewsContainer: React.FC = () => {
    const { news } = useAppSelector(({ news }) => news)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(NewsServices.getNews({ skip: 0, limit: 1 }))
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
