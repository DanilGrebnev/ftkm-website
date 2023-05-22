import { LoadingButton } from '@UI/LoadingButton'
import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { Grid } from '@components/containers/Grid'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { Container } from '@mui/material'
import { clearState } from '@redux/slices/news'
import { getNews } from '@redux/slices/thunks/newsThunk'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import s from './NewsBlog.module.scss'

const NewsBlog = () => {
    const dispatch = useAppDispatch()

    const { news, documentsCount, loading, error } = useAppSelector(
        ({ news }) => news
    )

    const [skip, setSkip] = useState(0)

    const limit = 20

    const fetchNews = async (skip: number) => {
        await dispatch(getNews({ skip, limit }))

        setSkip(p => p + limit)
    }

    useEffect(() => {
        dispatch(getNews({ skip, limit }))

        setSkip(p => p + limit)

        return () => {
            dispatch(clearState())
            setSkip(0)
        }
    }, [])

    const newsEnding = news.length >= documentsCount

    return (
        <Container
            maxWidth="xl"
            id="News-Block"
            className={s.NewsContainer}
        >
            {/* <SearchFilter /> */}
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
            <div className={s.btnContainer}>
                {
                    <LoadingButton
                        text={
                            !newsEnding ? 'Загрузить ещё' : 'Новости кончались'
                        }
                        size="medium"
                        disabled={loading || newsEnding ? true : false}
                        loading={loading}
                        onClick={() => fetchNews(skip)}
                    />
                }
            </div>
        </Container>
    )
}

export default NewsBlog
