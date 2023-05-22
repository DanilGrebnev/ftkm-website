import { LoadingButton } from '@UI/LoadingButton'
import { SearchFilter } from '@components/Smart/SearchFilter'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Tooltip } from '@mui/material'
import { clearState } from '@redux/slices/news'
import { setSearchMode } from '@redux/slices/news'
import { getNews } from '@redux/slices/thunks/newsThunk'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { NewsItem } from './NewsItem'
import s from './style.module.scss'

export const News = () => {
    return (
        <section className={s.news}>
            <div className={s.searchContainer}>
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
                {/* {news.map(document => (
                    <NewsItem
                        key={document._id}
                        {...document}
                    />
                ))} */}
            </section>
            <div className={s.btnContainer}>
                {/* <LoadingButton
                    text="Загрузить ещё"
                    size="medium"
                    disabled={loading ? true : false}
                    loading={loading}
                    onClick={() => {
                        setSkip(p => p + limit)
                    }}
                /> */}
            </div>
        </section>
    )
}
