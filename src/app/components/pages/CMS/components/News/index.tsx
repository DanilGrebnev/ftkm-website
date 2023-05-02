import { LoadingButton } from '@UI/LoadingButton'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Tooltip } from '@mui/material'
import { clearState, fetchNews } from '@redux/slices/news'
import { setSearchMode } from '@redux/slices/news'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { NewsItem } from './NewsItem'
import s from './style.module.scss'

export const News = () => {
    const limit = 20

    const { documentsCount, error, news, searchMode, loading } = useAppSelector(
        ({ news }) => news
    )

    const dispatch = useAppDispatch()

    const [skip, setSkip] = useState(0)

    const [filterStr, setSearchFilter] = useState('')

    const getNews = async (skip: number, limit: number, filterStr: string) => {
        await dispatch(fetchNews({ skip, limit, filterStr }))
    }

    useEffect(() => {
        getNews(skip, limit, filterStr)

        return () => {
            dispatch(clearState())
            setSkip(0)
        }
    }, [])

    useEffect(() => {
        if (!skip || newsEnding) return
        getNews(skip, limit, filterStr)
    }, [skip])

    const newsEnding = news.length >= documentsCount

    return (
        <section className={s.news}>
            <div className={s.searchContainer}>
                {/* <SearchFilter
                    getNews={getNews}
                    setSearchFilter={setSearchFilter}
                /> */}
                <Link to={'addNews'}>
                    <Tooltip
                        title="Добавить статью"
                        children={
                            <AddCircleIcon
                                sx={{ cursor: 'pointer' }}
                                color="info"
                                fontSize="large"
                            />
                        }
                    />
                </Link>
            </div>

            <section className={s.newsContainer}>
                {news.map(document => (
                    <NewsItem key={document._id} {...document} />
                ))}
            </section>
            <div className={s.btnContainer}>
                <LoadingButton
                    text="Загрузить ещё"
                    size="medium"
                    disabled={loading ? true : false}
                    loading={loading}
                    onClick={() => {
                        setSkip(p => p + limit)
                    }}
                />
            </div>
        </section>
    )
}
