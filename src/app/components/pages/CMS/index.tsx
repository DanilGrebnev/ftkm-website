import { Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { News } from './components/News'
import { OneNewsEditor } from './components/OneNewsEditor'
import s from './style.module.scss'
import './style.scss'

const CMS = () => {
    return (
        <section className={`CMS ${s.CMS}`}>
            <section className={s.paper}>
                <Menu />
                <section className={`CMS-Body ${s.body}`}>
                    <Routes>
                        <Route
                            path="news"
                            element={<News />}
                        />
                        <Route
                            path="news/:_id"
                            element={<OneNewsEditor />}
                        />
                        <Route
                            path="news/addNews"
                            element={<OneNewsEditor />}
                        />
                    </Routes>
                </section>
            </section>
        </section>
    )
}

export default CMS
