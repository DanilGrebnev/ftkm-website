import { LoadingButton } from '@UI/LoadingButton'
import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { Grid } from '@components/containers/Grid'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Container } from '@mui/material'
import { clearState, fetchNews } from '@redux/slices/news'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import s from './NewsBlog.module.scss'

export const NewsBlog = () => {
    const dispatch = useAppDispatch()

    const { news, documentsCount, loading, error } = useAppSelector(
        ({ news }) => news
    )

    const [skip, setSkip] = useState(0)

    const limit = 20

    const getNews = async (skip: number) => {
        await dispatch(fetchNews({ skip, limit }))

        setSkip(p => p + limit)
    }

    useEffect(() => {
        dispatch(fetchNews({ skip, limit }))

        setSkip(p => p + limit)

        return () => {
            dispatch(clearState())
            setSkip(0)
        }
    }, [])

    const newsEnding = news.length >= documentsCount

    return (
        <Container maxWidth="xl" id="News-Block" className={s.NewsContainer}>
            {/* <SearchFilter /> */}
            <Grid className={s['news-blog']}>
                {news.map(news => (
                    <Link key={news._id} to={`${news._id}`}>
                        <NewsCardItem {...news} />
                    </Link>
                ))}
            </Grid>
            <div className={s.btnContainer}>
                {
                    <LoadingButton
                        text={
                            !newsEnding ? 'Загрузить ещё' : 'Новости кончались'
                        }
                        size="medium"
                        disabled={loading || newsEnding ? true : false}
                        loading={loading}
                        onClick={() => getNews(skip)}
                    />
                }
            </div>
        </Container>
    )
}
