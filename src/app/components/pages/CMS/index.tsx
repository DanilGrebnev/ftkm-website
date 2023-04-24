import { Container, Paper } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { News } from './components/News'
import s from './style.module.scss'

export const CMS = () => {
    return (
        <section className={`CMS ${s.CMS}`}>
            <section className={s.paper}>
                <Menu />
                <Routes>
                    <Route path="news" element={<News />} />
                </Routes>
            </section>
        </section>
    )
}
