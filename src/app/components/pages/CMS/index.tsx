import { useAppDispatch } from '@hooks/useAppDispatch'
import { getNews, postNews } from '@redux/slices/thunks/newsThunk'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { News } from './components/News'
import { NewsItem } from './components/News/NewsItem'
import s from './style.module.scss'
import './style.scss'

const CMS = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getNews({ limit: 10, skip: 0 }))
    }, [])

    return (
        <section className={s.CMS}>
            <div className={s.block}></div>
        </section>
    )
}

export default CMS
