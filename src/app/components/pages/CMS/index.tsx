import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { News } from './components/News'
import s from './style.module.scss'

import './style.scss'

export const CMS = () => {
    return (
        <section className={`CMS ${s.CMS}`}>
            <section className={s.paper}>
                <Menu />
                <section className={`CMS-Body ${s.body}`}>
                    <Routes>
                        <Route path="news" element={<News />} />
                    </Routes>
                </section>
            </section>
        </section>
    )
}
